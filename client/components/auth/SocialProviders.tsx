import { Group } from '@mantine/core';
import React from 'react';
import { FacebookButton, GoogleButton } from './buttons';
import { useContext } from 'react';
import { ModalContext, ModalContextProps } from 'providers';

const SocialProviders = () => {
	const { close } = useContext<ModalContextProps>(ModalContext);

	return (
		<>
			<Group noWrap grow mb="md" mt="md">
				<GoogleButton onSuccessLogin={close} radius="xl">
					Google
				</GoogleButton>
				<FacebookButton onSuccessRequest={close} />
			</Group>
		</>
	);
};

export default SocialProviders;
