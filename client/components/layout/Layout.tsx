import React from 'react';
import { Header } from '.';
import { Group } from '@mantine/core';

const Layout: React.FC = (props) => {
	const { children } = props;

	return (
		<div>
			<Header />

			<Group>{children}</Group>
		</div>
	);
};

export default Layout;
