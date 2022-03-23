import React from 'react';
import { Avatar, Group, Button } from '@mantine/core';
import { useToggle } from 'hooks';
import { ModalContainer } from '@shared/.';
import { AuthForm } from 'components/auth';
import { useAuthState } from 'hooks';
import { useNavigation } from 'hooks';

const Content = () => {
	const [open, _, changeOpen] = useToggle();
	const { path } = useNavigation();

	const {
		user: { data: userData },
	}: any = useAuthState();

	return (
		<Group>
			{userData ? (
				<Group>
					<Avatar
						radius={'md'}
						src={userData.picture}
						alt={userData.name ? userData?.name : 'no image here'}
						color="indigo"
					/>
				</Group>
			) : (
				<Group>
					<Button
						onClick={() => changeOpen(true)}
						radius="xl"
						size="sm"
						variant="outline"
					>
						Login
					</Button>
				</Group>
			)}

			<ModalContainer
				changeOpen={changeOpen as (val: boolean) => void}
				isOpen={open as boolean}
			>
				<AuthForm />
			</ModalContainer>
		</Group>
	);
};

export default Content;
