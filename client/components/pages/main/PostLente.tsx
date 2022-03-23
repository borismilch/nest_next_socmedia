import React from 'react';
import { PostList } from '@shared/post';
import { fakePosts } from 'mocks';

const PostLente: React.FC = (props) => {
	return <PostList posts={fakePosts} />;
};

export default PostLente;
