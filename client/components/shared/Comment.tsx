import React from 'react';
import {
	createStyles,
	Text,
	Avatar,
	Group,
	TypographyStylesProvider,
	Paper,
} from '@mantine/core';
import { IUser } from 'models';

const useStyles = createStyles((theme) => ({
	comment: {
		padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
	},

	body: {
		paddingLeft: 54,
		paddingTop: theme.spacing.sm,
		fontSize: theme.fontSizes.sm,
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		maxHeight: '4em',
	},

	content: {
		'& > p:last-child': {
			marginBottom: 0,
		},
	},
}));

interface CommentHtmlProps {
	postedAt: string;
	body: string;
	author: IUser;
}

export default function CommentHtml({
	postedAt,
	body,
	author,
}: CommentHtmlProps) {
	const { classes } = useStyles();

	return (
		<Paper withBorder radius="md" className={classes.comment}>
			<Group>
				<Avatar src={author.picture} alt={author.name} radius="xl" />
				<div>
					<Text size="sm">{author.name}</Text>
					<Text size="xs" color="dimmed">
						{postedAt}
					</Text>
				</div>
			</Group>
			<TypographyStylesProvider className={classes.body}>
				<div className={classes.content}>{body}</div>
			</TypographyStylesProvider>
		</Paper>
	);
}
