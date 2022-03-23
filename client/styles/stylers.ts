import { BoxSx } from '@mantine/core/lib/components/Box/use-sx/use-sx';

export const makeCols = (gap: number): BoxSx => ({
	display: 'flex',
	flexDirection: 'column',
	gap,
});

export const makeMargin = (margin: string): BoxSx => ({
	margin,
});
