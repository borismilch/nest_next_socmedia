import React from 'react';
import { PostLente } from '.';

import { Pagination } from '@mantine/core';

const Content = () => {
	return (
		<div
			style={{
				maxWidth: 700,
				margin: '30px auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<PostLente />

			<Pagination total={20} siblings={1} initialPage={10} />
		</div>
	);
};

export default Content;
