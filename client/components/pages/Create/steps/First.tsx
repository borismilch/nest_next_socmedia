import React from 'react';
import { Box, Textarea } from '@mantine/core';
import { TextInput, TagPicker } from '@shared/forms';
import { usePostState } from 'store/hooks';
import { makeCols } from 'styles/stylers';

const First: React.FC = () => {
	const { changePost, newPost } = usePostState();

	return (
		<Box sx={{ ...makeCols(15), marginBottom: 30 }}>
			<TextInput
				value={newPost.title}
				onChange={changePost('title')}
				label="Post title"
				placeholder="post title..."
			/>
			<Textarea
				label="Add description to your post"
				placeholder="Write what is on your mind..."
				autosize
				value={newPost.body}
				minRows={3}
				maxRows={5}
				onChange={(e) => changePost('body')(e.target.value)}
			/>

			<TagPicker
				placeholder="Pick tag"
				label="Pick minimum one tag"
				setTags={changePost('tags')}
			/>
		</Box>
	);
};

export default First;
