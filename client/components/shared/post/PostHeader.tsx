import { Avatar, Group, Text } from '@mantine/core';
import { IUser } from 'models';
import React from 'react';
import { dayts } from 'lib/dayts';
import { HeaderMenu } from '.';

interface PostHeaderProps {
	author: IUser;
	postedAt: number;
}

const Header: React.FC<PostHeaderProps> = (props) => {
	const { author, postedAt } = props;
	const fullName = author.name;

	return (
		<Group style={{ paddingBottom: 20 }}>
			<Avatar src={author.picture} alt={fullName} radius="xl" />
			<div>
				<Text size="sm" weight={600}>
					{fullName}
				</Text>
				<Text size="xs" weight={500} color="dimmed">
					{dayts(postedAt).fromNow()}
				</Text>
			</div>

			<div style={{ marginLeft: 'auto' }} />

			<HeaderMenu />
		</Group>
	);
};

export default Header;
