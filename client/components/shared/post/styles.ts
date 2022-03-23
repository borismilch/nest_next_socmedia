import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[7]
				: theme.white,
		marginBottom: 30,
		transitionDuration: '270ms',
		':hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.white,
		},
	},

	footer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[2]
		}`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
	},
	image: {
		maxHeight: 550,
	},
}));

export default useStyles;
