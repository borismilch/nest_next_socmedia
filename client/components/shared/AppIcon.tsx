import React, { ReactElement } from 'react';
import { ActionIcon, MantineNumberSize } from '@mantine/core';

interface AppIconProps {
	icon: ReactElement<any, any>;
	size?: MantineNumberSize;
	onClick?: () => void;
}

const AppIcon: React.FC<AppIconProps> = (props) => {
	const { icon, onClick = () => {}, size = 'md' } = props;

	return (
		<ActionIcon size={size} onClick={onClick}>
			{icon}
		</ActionIcon>
	);
};

export default AppIcon;
