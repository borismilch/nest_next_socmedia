import React, { ReactElement } from 'react';
import { Group, Text } from '@mantine/core';
import { getActiveColor } from './styles';
import { useMantineTheme } from '@mantine/core';
import { DropzoneStatus } from '@mantine/dropzone';

interface UploadContentProps {
	status: DropzoneStatus;
	description: string;
	accept: string[];
	getIcon: (color: string) => ReactElement<any, any>;
}

const UploadContent: React.FC<UploadContentProps> = (props) => {
	const { status, accept, description, getIcon } = props;

	const theme = useMantineTheme();
	return (
		<div style={{ pointerEvents: 'none' }}>
			<Group position="center">
				{getIcon(getActiveColor(status, theme))}
			</Group>
			<Text
				align="center"
				weight={700}
				size="lg"
				mt="xl"
				sx={{ color: getActiveColor(status, theme) }}
			>
				{status.accepted
					? 'Drop files here'
					: status.rejected
					? 'File less than 30mb'
					: 'Upload files here'}
			</Text>
			<Text align="center" size="sm" mt="xs" color="dimmed">
				{description
					? description
					: 'Accepted types: ' +
					  accept
							.map((item) => item.replace('image/', ''))
							.join(', ')}
			</Text>
		</div>
	);
};

export default UploadContent;
