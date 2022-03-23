import { Container, Text, Title } from '@mantine/core';
import React from 'react';
import { useStyles } from './styles';

interface SectionTitle {
	title: string;
	description: string;
}

const SectionTitle: React.FC<SectionTitle> = (props) => {
	const { description, title } = props;

	const { classes } = useStyles();
	return (
		<div className={classes.titleContainer}>
			<div style={{ padding: '0px 16px' }}>
				<Title className={classes.title}>{title}</Title>
			</div>

			<Container size={560} p={0}>
				<Text size="sm" className={classes.description}>
					{description}
				</Text>
			</Container>
		</div>
	);
};

export default React.memo(SectionTitle);
