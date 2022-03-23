import React from 'react';
import { Modal } from '@mantine/core';
import { ModalContext, ModalContextProps } from 'providers';

interface ModalContainerProps {
	isOpen: boolean;
	changeOpen: (val: boolean) => void;
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
	const { changeOpen, isOpen, children } = props;

	const closeModal = () => changeOpen(false);

	const contextData: ModalContextProps = {
		changeOpened: changeOpen,
		close: closeModal,
		opened: isOpen,
	};

	return (
		<ModalContext.Provider value={contextData}>
			<Modal
				centered
				opened={isOpen}
				onClose={closeModal}
				title="Introduce yourself!"
			>
				{children}
			</Modal>
		</ModalContext.Provider>
	);
};

export default ModalContainer;
