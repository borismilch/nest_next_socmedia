import { createNotifySystem } from 'helpers';
import { queryClient } from 'pages/_app';
import React from 'react';
import { useMutation } from 'react-query';
import { LoginPayload, RegisterPayload } from 'service/auth.service';
import { AuthService } from 'service';

const useAuthMutations = (onSuccess: () => void) => {
	const registerMutaion = useMutation(
		async (payload: RegisterPayload) => {
			return await AuthService.register(payload);
		},
		{
			...createNotifySystem(
				{
					errormessage: 'Registration failed',
					successMessage: 'Registration was success',
					successCaption: 'Welcome to this app',
				},
				() => {
					queryClient.invalidateQueries('currentUser');
					close();
				},
			),
		},
	);
	const loginMutaion = useMutation(
		async (payload: LoginPayload) => await AuthService.login(payload),
		{
			...createNotifySystem(
				{
					errormessage: 'Login failed',
					successMessage: 'Login was success',
					successCaption: 'Welcome to this app again',
				},
				() => {
					queryClient.invalidateQueries('currentUser');
					onSuccess();
				},
			),
		},
	);

	const providerMutation = useMutation(
		async (profile: RegisterPayload) => {
			console.log(profile);
			await AuthService.signWithProvider(profile);
		},
		{
			...createNotifySystem(
				{
					errormessage: 'Login With google failed failed',
					successMessage: 'Login With google scceseded',
					successCaption: 'welcum',
				},
				() => {
					queryClient.invalidateQueries('currentUser');
					onSuccess();
				},
			),
		},
	);

	const transformProfile = (profile: any): RegisterPayload => {
		return {
			email: profile.email,
			name: profile.givenName,
			password: 'dlskdslksdl',
			picture: profile.imageUrl,
		};
	};

	const isLoading =
		registerMutaion.isLoading ||
		loginMutaion.isLoading ||
		providerMutation.isLoading;

	return {
		registerMutaion,
		loginMutaion,
		providerMutation,
		isLoading,
		transformProfile,
	};
};

export default useAuthMutations;
