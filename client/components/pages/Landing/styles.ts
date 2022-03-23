import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
		overflowX: 'hidden',
	},
	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		marginBottom: theme.spacing.md,
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			fontSize: 32,
			textAlign: 'left',
		},
	},

	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			textAlign: 'left',
		},
	},

	titleContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		overflow: 'auto',
		margin: '60px 0px 40px 0px',
	},
}));
