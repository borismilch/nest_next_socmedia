import React from 'react';
import { useRouter } from 'next/router';

export default () => {
	const router = useRouter();

	const carryRouter = (path: string) => () => {
		router.push(path);
	};

	const pushRouter = (path: string) => {
		router.push(path);
	};

	const backRouter = () => {
		router.back();
	};
	const path = router?.pathname;

	return { pushRouter, carryRouter, backRouter, router, path };
};
