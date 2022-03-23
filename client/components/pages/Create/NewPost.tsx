import React from 'react';
import { Paper, Container } from '@mantine/core';
import { FormHeader, Stepper } from '.';

const NewPost = () => {
	return (
		<Container size={620} my={40}>
			<FormHeader
				description="Write what in your mind now"
				title="Create new"
			/>
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<Stepper />
			</Paper>
		</Container>
	);
};

export default NewPost;
