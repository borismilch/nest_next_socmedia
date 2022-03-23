import React from 'react';
import {
	Overlay,
	Container,
	Title,
	Button,
	Text,
} from '@mantine/core';
import { default as useStyles } from './styles';
import { DrawlerContainer } from '@shared/containers';
import { useToggle } from 'hooks';
import { AuthForm } from 'components/auth';
import { useAdaptivScreen } from 'hooks';

const HeroContentLeft = () => {
	const { classes } = useStyles();
	const [isOpen, toglgeOpen] = useToggle();
	const { isMobile } = useAdaptivScreen();

	return (
		<>
			<div className={classes.hero}>
				<Overlay
					gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
					opacity={1}
					zIndex={0}
				/>
				<Container className={classes.container}>
					<Title className={classes.title}>
						A free education planform for little dummies
					</Title>
					<Text className={classes.description} size="xl" mt="xl">
						Become a better in unerstanding core features of subject
						what you trying to learn with all complicated features
						like voice recording and course management
					</Text>

					<Button
						variant="gradient"
						size={isMobile ? 'lg' : 'xl'}
						radius="xl"
						onClick={toglgeOpen}
						className={classes.control}
					>
						Get started
					</Button>
				</Container>
			</div>

			<DrawlerContainer
				size={isMobile ? 440 : undefined}
				changeOpen={toglgeOpen}
				isOpen={isOpen}
			>
				<AuthForm />
			</DrawlerContainer>
		</>
	);
};

export default HeroContentLeft;
