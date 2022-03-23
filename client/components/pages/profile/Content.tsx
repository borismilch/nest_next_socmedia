import React from 'react';
import { useAuthState } from 'hooks';
import { UserInfo } from './';
import { ScrollArea } from '@mantine/core';

const Content = () => {
	const { user } = useAuthState();
	return (
		<ScrollArea
			style={{
				flex: 1,
				overflowY: 'auto',
				overflowX: 'hidden',
				maxHeight: 'calc(100vh - 100px)',
				display: 'flex',
				flexDirection: 'column',
				margin: '0',
			}}
		>
			<div style={{ margin: '20px 20px 20px 7px' }}>
				<UserInfo user={user.data!} />
			</div>

			<div style={{ flex: 1, height: '100%' }}></div>
		</ScrollArea>
	);
};

export default Content;
