import { Group } from '@mantine/core';
import React from 'react';
import { useStyles } from './styles';

interface HeaderLink {
	label: string;
	link: string;
}

export const links: HeaderLink[] = [
	{
		label: 'Home',
		link: '/app/',
	},
	{
		label: 'Tests',
		link: '/tests',
	},
	{
		label: 'Courses',
		link: '/courses',
	},
	{
		label: 'Teachers',
		link: '/teachers',
	},
	{
		label: 'Profile',
		link: '/profile',
	},
];

const HeaderLinks: React.FC = () => {
	const { classes } = useStyles();

	return (
		<Group spacing={'sm'}>
			{links.map((link) => (
				<a
					key={link.label}
					href={link.link}
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				>
					{link.label}
				</a>
			))}
		</Group>
	);
};

export default HeaderLinks;
