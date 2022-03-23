import React from 'react';
import { Group, Burger } from '@mantine/core';
import { MantineLogo } from 'assets/icons';
import Link from 'next/link';
import { MobileView } from '@shared/HOC';
import { DrawlerContainer } from '@shared/containers';
import { mobilePresset } from '@shared/containers/drawer/pressets';
import { DrawerLinks } from './';
import { useToggle } from 'hooks';

const Left = () => {
	const [drawerOpen, toggleDrawer] = useToggle(false);

	return (
		<>
			<Group>
				<MobileView>
					<Burger
						opened={drawerOpen}
						onClick={toggleDrawer}
						size="sm"
					/>
				</MobileView>

				<Link href={'/'}>
					<MantineLogo />
				</Link>
			</Group>

			<DrawlerContainer
				size={'40%'}
				position={'bottom'}
				transition={'slide-up'}
				stylePresset={mobilePresset}
				changeOpen={toggleDrawer}
				isOpen={drawerOpen}
			>
				<div onClick={toggleDrawer}>
					<DrawerLinks />
				</div>
			</DrawlerContainer>
		</>
	);
};

export default React.memo(Left);
