import React, { createContext } from 'react';

export interface ModalContextProps {
	opened: boolean;
	changeOpened: (val: boolean) => void;
	close: () => void;
}

export default createContext<ModalContextProps>(
	{} as ModalContextProps,
);
