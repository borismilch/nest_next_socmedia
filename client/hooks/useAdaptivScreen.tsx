import { useState, useEffect } from 'react';

const useAdaptivScreen = () => {
	const [width, setWidth] = useState<number>(
		typeof window !== 'undefined' ? window.innerWidth : 1000,
	);

	function handleWindowSizeChange() {
		setWidth(window?.innerWidth);
	}
	useEffect(() => {
		window?.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window?.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 768;
	const isBrowser = !isMobile;

	return { isMobile, isBrowser };
};

export default useAdaptivScreen;
