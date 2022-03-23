import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { AuthService } from 'service';
import { IUser } from 'models';
import cookies from 'js-cookie';

interface ReturnType {
	user: UseQueryResult<IUser | null>;
	logout: () => void;
	refetch: () => void;
	isLoading: boolean;
}

const useAuthState = (): ReturnType => {
	const user = useQuery<IUser | null>(
		'currentUser',
		async () => await AuthService.getCurrentUser(),
		{ initialData: null, refetchOnMount: true },
	);

	const logout = () => {
		localStorage.removeItem('authToken');
		cookies.remove('token');

		user.refetch();
	};

	const isLoading = user.isLoading || user.isFetching;

	return { user, logout, refetch: user.refetch, isLoading };
};

export default useAuthState;
