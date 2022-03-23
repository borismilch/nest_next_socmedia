import React from 'react';
import { SimpleGrid, Container } from '@mantine/core';
import { fakeFeatures } from 'mocks';
import { Feature } from '.';

const Features = () => {
	const items = fakeFeatures.map((item) => (
		<Feature {...item} key={item.title} />
	));

	return (
		<Container mt={30} mb={30} size="lg">
			<SimpleGrid
				cols={3}
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				spacing={50}
			>
				{items}
			</SimpleGrid>
		</Container>
	);
};

export default Features;
