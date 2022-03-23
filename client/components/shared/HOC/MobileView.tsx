import React from 'react';
import { useAdaptivScreen } from 'hooks';

const MobileView: React.FC = ({ children }) => {
	const { isMobile } = useAdaptivScreen();

	return <>{isMobile ? children : <></>}</>;
};

export default MobileView;
