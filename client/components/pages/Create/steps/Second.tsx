import React from 'react';
import { ImageDropZone } from '@shared/forms';
import { Box } from '@mantine/core';

const Second = () => {
	const handleFile = (url: string) => {
		console.log(url);
	};

	return (
		<Box sx={{ margin: '20px 10px', marginBottom: 60 }}>
			<ImageDropZone handleImage={handleFile} />
		</Box>
	);
};

export default Second;
