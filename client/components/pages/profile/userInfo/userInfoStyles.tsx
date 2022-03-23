import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[8]
				: theme.white,
	},

	avatar: {
		border: `2px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[7]
				: theme.white
		}`,
	},
}));

export default useStyles;
