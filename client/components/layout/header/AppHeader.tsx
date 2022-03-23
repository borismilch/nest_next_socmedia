import React from 'react';
import { Header, Group } from '@mantine/core';
import { useNavigation } from 'hooks';
import { BrowserView } from '@shared/HOC';
import { AppIcon } from '@shared/.';
import { Plus } from 'tabler-icons-react';

import {
	useStyles,
	HeaderSearch,
	HeaderLeft,
	HeaderActions,
	HeaderLinks,
} from '.';

const HeaderContent = () => {
	const { classes } = useStyles();
	const { path, carryRouter } = useNavigation();

	const isHome = path === '/';

	return (
		<>
			<div style={{ height: 56 }}></div>
			<Header fixed height={56} className={classes.header}>
				<div className={classes.inner}>
					<Group>
						<HeaderLeft />
						{!isHome && <HeaderSearch />}
					</Group>

					<BrowserView>
						<HeaderLinks />
					</BrowserView>

					<Group>
						<AppIcon
							onClick={carryRouter('/create')}
							icon={<Plus size={18} />}
						/>
						<HeaderActions />
					</Group>
				</div>
			</Header>
		</>
	);
};

export default HeaderContent;
