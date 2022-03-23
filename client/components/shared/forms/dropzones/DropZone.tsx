import React, { ReactElement, useRef } from 'react';
import { Button } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { CloudUpload } from 'tabler-icons-react';
import { useStyles } from './styles';
import { UploadContent } from './';

const DefaultIcon = (color: string) => (
	<CloudUpload size={50} color={color} />
);

export const DefaultControll = () => {
	const { classes } = useStyles();
	return (
		<Button className={classes.control} size="md" radius="xl">
			Select files
		</Button>
	);
};

interface DropzoneProps {
	maxSize?: number;
	controll?: ReactElement<any, any>;
	description?: string;
	accept?: string[];
	handleFile: (file: File) => void;
	getIcon?: (color: string) => ReactElement<any, any>;

	dropContentFunc: (status: any) => ReactElement<any, any>;
}

const DropzoneButton: React.FC<DropzoneProps> = (props) => {
	const {
		maxSize = 30 * 1024 ** 2,
		controll = <DefaultControll />,
		description,

		handleFile,
		dropContentFunc,
		getIcon = DefaultIcon,
		accept = [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp],
	} = props;

	const { classes } = useStyles();
	const openRef = useRef<() => void>(() => {});

	return (
		<div className={classes.wrapper}>
			<Dropzone
				openRef={openRef}
				onDrop={([file]) => handleFile(file)}
				onReject={() => console.log('rejectd')}
				className={classes.dropzone}
				radius="md"
				accept={accept}
				maxSize={maxSize}
			>
				{(status) => dropContentFunc(status)}
			</Dropzone>

			<div onClick={() => openRef.current()}>{controll}</div>
		</div>
	);
};

export default DropzoneButton;
