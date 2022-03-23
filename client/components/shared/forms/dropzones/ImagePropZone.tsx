import React, { useEffect } from 'react';
import DropZone from './DropZone';
import { useUploadData } from 'hooks';
import { Image } from '@mantine/core';
import { Photo } from 'tabler-icons-react';
import { MIME_TYPES } from '@mantine/dropzone';
import { UploadContent } from './index';

const getImageIcon = (color: string) => (
	<Photo size={100} color={color} />
);

interface ImageDropZoneProps {
	handleImage: (val: string) => void;
}

const UploadContentFunc = (status: any) => {
	const imageAccept = [
		MIME_TYPES.png,
		MIME_TYPES.jpeg,
		MIME_TYPES.webp,
	];

	return (
		<UploadContent
			status={status}
			getIcon={getImageIcon}
			description="Upload Image here"
			accept={imageAccept}
		/>
	);
};

const ImagePropZone: React.FC<ImageDropZoneProps> = (props) => {
	const { handleImage } = props;

	const { getUploadedData, url, dataUrl } = useUploadData();

	useEffect(() => {
		if (url) {
			handleImage(url);
		} else handleImage('');
	}, [url]);

	return (
		<div>
			<DropZone
				handleFile={getUploadedData}
				getIcon={getImageIcon}
				description={'Upload photo here'}
				dropContentFunc={
					dataUrl ? () => <Image src={dataUrl} /> : UploadContentFunc
				}
			/>
		</div>
	);
};

export default ImagePropZone;
