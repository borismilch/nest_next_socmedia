import { ScrollArea } from '@mantine/core';
import React from 'react';
import { Footer, Header } from '.';

interface EmptyLayoutProps {
	isFooter?: boolean;
}

const EmptyLayout: React.FC<EmptyLayoutProps> = (props) => {
	const { isFooter = true, children } = props;
	return (
		<ScrollArea style={{ height: '100vh' }}>
			<Header />
			{children}
			{isFooter && <Footer />}
		</ScrollArea>
	);
};

export default EmptyLayout;
