import React from 'react';
import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { fakeFooterData } from 'mocks';
import {
	BrandTwitter,
	BrandYoutube,
	BrandInstagram,
} from 'tabler-icons-react';
import MantineLogo from 'assets/icons/MantineLogo';
import { FooterGroup } from '.';
import { useStyles } from './style';

interface FooterGroup {
	title: string;
	links: { label: string; link: string }[];
}

export interface FooterProps {
	data: FooterGroup[];
}

const Footer = () => {
	const { classes } = useStyles();
	const { data } = fakeFooterData;

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<MantineLogo />
					<Text
						size="xs"
						color="dimmed"
						className={classes.description}
					>
						Build fully functional accessible web applications faster
						than ever
					</Text>
				</div>
				<div className={classes.groups}>
					{data.map((item: FooterGroup) => (
						<FooterGroup group={item} />
					))}
				</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					© 2020 mantine.dev. All rights reserved.
				</Text>

				<Group
					spacing={0}
					className={classes.social}
					position="right"
					noWrap
				>
					<ActionIcon size="lg">
						<BrandTwitter size={18} />
					</ActionIcon>
					<ActionIcon size="lg">
						<BrandYoutube size={18} />
					</ActionIcon>
					<ActionIcon size="lg">
						<BrandInstagram size={18} />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
};

export default Footer;
