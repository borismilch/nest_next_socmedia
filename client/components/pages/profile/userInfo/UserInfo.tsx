import React from 'react';
import { Avatar, Text, Button, Group } from '@mantine/core';
import { Card } from '@mantine/core';
import { useStyles } from './';
import { IUser } from 'models';

const defaultBg =
	'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg';

interface UserInfoActionProps {
	user: IUser;
}

const UserInfo: React.FC<UserInfoActionProps> = (props) => {
	const {
		user: { picture, email, name, backbroundImage },
	} = props;
	const { classes, theme } = useStyles();

	const bgImage = backbroundImage ? backbroundImage : defaultBg;

	return (
		<Card withBorder p="xl" radius="md" className={classes.card}>
			<Card.Section
				sx={{ backgroundImage: `url(${bgImage})`, height: 180 }}
			/>
			<Avatar
				src={picture}
				size={120}
				radius={120}
				mx="auto"
				mt={-60}
				className={classes.avatar}
			/>
			<Text align="center" size="lg" weight={500} mt="sm">
				{name}
			</Text>
		</Card>
	);
};

export default React.memo(UserInfo);
