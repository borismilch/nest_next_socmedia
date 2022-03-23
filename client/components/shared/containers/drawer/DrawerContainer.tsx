import React from 'react';
import {
	Drawer,
	MantineTransition,
	DrawerPosition,
} from '@mantine/core';

interface DrawlerContentProps {
	isOpen: boolean;
	changeOpen: (val: boolean) => void;
	transition?: MantineTransition;
	position?: DrawerPosition;
	size?: string | number;
	transitionDuration?: number;
	stylePresset?: any;
}

const DrawerContent: React.FC<DrawlerContentProps> = (props) => {
	const {
		changeOpen,
		isOpen,
		children,
		transition,
		position,
		size,
		transitionDuration = 270,
		stylePresset = {},
	} = props;

	return (
		<Drawer
			lockScroll
			opened={isOpen}
			onClose={changeOpen.bind(null, false)}
			transition={transition}
			transitionDuration={transitionDuration}
			size={size}
			styles={stylePresset}
			position={position}
			aria-labelledby="drawer-title"
			aria-describedby="drawer-body"
			closeButtonLabel="Close drawer"
			transitionTimingFunction="ease"
		>
			{children}
		</Drawer>
	);
};

export default DrawerContent;
