export type MantineChangeEvent = {
	currentTarget: { name: string; value: string };
	preventDefault: () => void;
	stopPropagation: () => void;
};
