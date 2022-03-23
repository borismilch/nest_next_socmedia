import React from 'react';
import { Text } from '@mantine/core';
import { useStyles } from './style';

export interface FooterGroupsProps {
	group: {
		title: string;
		links: {
			label: string;
			link: string;
		}[];
	};
}

const FooterGroups: React.FC<FooterGroupsProps> = (props) => {
	const { group } = props;
	const { classes } = useStyles();

	const links = group.links.map((link, index) => (
		<Text<'a'>
			key={index}
			className={classes.link}
			component="a"
			href={link.link}
			onClick={(event) => event.preventDefault()}
		>
			{link.label}
		</Text>
	));

	return (
		<div className={classes.wrapper} key={group.title}>
			<Text className={classes.title}>{group.title}</Text>
			{links}
		</div>
	);
};

export default FooterGroups;
