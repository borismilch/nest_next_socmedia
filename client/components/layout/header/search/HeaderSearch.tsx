import React from 'react';
import { useStyles } from '..';
import { Group, Autocomplete } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight';
import { actions } from '.';
import { BrowserView, MobileView } from '@shared/HOC';
import { AppIcon } from '@shared/.';

const Content = () => {
	return (
		<SpotlightProvider
			actions={actions}
			searchIcon={<Search size={18} />}
			searchPlaceholder="Search..."
			shortcut="mod + shift + 1"
			styles={{
				spotlight: {
					margin: '0px 10px',
				},
			}}
			nothingFoundMessage="Nothing found..."
		>
			<SearchContent />
		</SpotlightProvider>
	);
};

const SearchContent = () => {
	const { classes } = useStyles();
	const spotlight = useSpotlight();

	return (
		<Group>
			<Group ml={0} spacing={3} className={classes.links}></Group>

			<BrowserView>
				<Autocomplete
					className={classes.search}
					placeholder="Search"
					icon={<Search size={16} />}
					onClick={spotlight.openSpotlight}
					data={[]}
				/>
			</BrowserView>

			<MobileView>
				<AppIcon
					icon={<Search size={20} />}
					onClick={spotlight.openSpotlight}
				/>
			</MobileView>
		</Group>
	);
};

export default Content;
