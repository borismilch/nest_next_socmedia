import React from 'react';
import { Title, Text } from '@mantine/core';

interface FormHeaderProps {
	title: string;
	description: string;
}

const FormHeader: React.FC<FormHeaderProps> = (props) => {
	const { description, title } = props;

	return (
		<>
			<Title
				align="center"
				sx={(theme) => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}
			>
				{title}
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				{description}
			</Text>
		</>
	);
};

export default React.memo(FormHeader);
