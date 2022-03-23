import React from 'react';
import { useAdaptivScreen } from 'hooks';

const BrowserView: React.FC = ({ children }) => {
	const { isBrowser } = useAdaptivScreen();

	return <>{isBrowser ? children : <></>}</>;
};

export default BrowserView;
