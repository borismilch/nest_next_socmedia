import React from 'react';
import { useNavigation } from 'hooks';
import cookies from 'js-cookie';
import { useAuthState } from 'hooks';
import { PageLoader } from '@shared/loaders';

interface RouterGuardProps {
	needUser: boolean;
}

const RouteAuthguard: React.FC<RouterGuardProps> = (props) => {
	const { needUser, children } = props;
	const token = cookies.get('token');
	const { pushRouter } = useNavigation();
	const { isLoading } = useAuthState();

	if (needUser && !token) {
		pushRouter('/');
	} else if (!needUser && token) {
		pushRouter('/app/');
	}

	if (isLoading) {
		return <PageLoader />;
	}

	return <>{children}</>;
};

export default RouteAuthguard;
