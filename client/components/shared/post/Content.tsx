import React from 'react';
import { Card, Image, Text, Group } from '@mantine/core';
import { PostHeader, useStyles } from '.';
import { IPost } from 'models';

interface PostProps {
	post: IPost;
}

const Post: React.FC<PostProps> = (props) => {
	const { classes } = useStyles();
	const { post } = props;

	return (
		<Card withBorder p="lg" className={classes.card}>
			<PostHeader author={post.author!} postedAt={post.createdAt!} />

			<Card.Section>
				<Image src={post.image} alt={post.title} />
			</Card.Section>

			<Group position="apart" mt="xl">
				<Text size="lg" weight={700} className={classes.title}>
					{post.title}
				</Text>
			</Group>
			<Text mt="sm" mb="md" color="dimmed" size="xs">
				{post.body}
			</Text>
		</Card>
	);
};

export default React.memo(Post);
