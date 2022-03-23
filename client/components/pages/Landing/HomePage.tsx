import React from 'react';
import { useStyles } from './styles';
import { Features, HeroTitle, SectionTitle, SendMail } from '.';
import { Questions } from '.';
import { Divider } from '@mantine/core';

const Content = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.container}>
			<HeroTitle />

			<SectionTitle
				description="Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."
				title="Integrate effortlessly with any technology stack"
			/>

			<Features />

			<Divider style={{ margin: '20px 0px' }} color={'dark'} />

			<Questions />

			<SendMail />
		</div>
	);
};

export default Content;
