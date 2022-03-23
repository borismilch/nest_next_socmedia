import React from 'react';
import { Loader, LoadingOverlay } from '@mantine/core';

const PageLoader = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<LoadingOverlay loader={<Loader size="xl" />} visible />
		</div>
	);
};

export default PageLoader;
