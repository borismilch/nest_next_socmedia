import { createStyles, MantineTheme } from '@mantine/core';
import { DropzoneStatus } from '@mantine/dropzone';

export const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		marginBottom: 30,
	},

	dropzone: {
		borderWidth: 1,
		paddingBottom: 50,
	},

	icon: {
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[3]
				: theme.colors.gray[4],
	},

	control: {
		position: 'absolute',
		width: 250,
		left: 'calc(50% - 125px)',
		bottom: -20,
	},
}));

export function getActiveColor(
	status: DropzoneStatus,
	theme: MantineTheme,
) {
	return status.accepted
		? theme.colors[theme.primaryColor][6]
		: status.rejected
		? theme.colors.red[6]
		: theme.colorScheme === 'dark'
		? theme.colors.dark[0]
		: theme.black;
}
