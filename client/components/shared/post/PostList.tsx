import React from 'react';
import { ScrollArea } from '@mantine/core';
import { Post } from '@shared/.';
import { fakePosts } from 'mocks';
import { IPost } from 'models';

interface PostLenteProps {
	posts: IPost[];
}

const PostLente: React.FC<PostLenteProps> = (props) => {
	const { posts } = props;
	const postsList = fakePosts.map((item) => <Post post={item} />);

	return <ScrollArea>{postsList}</ScrollArea>;
};

export default PostLente;
