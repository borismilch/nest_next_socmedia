import React from 'react';
import { links } from './HeaderLinks';
import { Button } from '@mantine/core';
import { useNavigation } from 'hooks';

const DrawerLinks = () => {
	const { carryRouter } = useNavigation();

	const linksButtons = links.map((item) => (
		<Button
			fullWidth
			size="lg"
			color={'dark'}
			variant="subtle"
			onClick={carryRouter(item.link)}
		>
			{item.label}
		</Button>
	));

	return <>{linksButtons}</>;
};

export default DrawerLinks;
