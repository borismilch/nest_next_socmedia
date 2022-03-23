import { Text } from '@mantine/core';
import { Truck } from 'tabler-icons-react';
import { useStyles } from './style';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
	icon: React.FC<React.ComponentProps<typeof Truck>>;
	title: string;
	description: string;
}

const Feature = ({
	icon: Icon,
	title,
	description,
	className,
	...others
}: FeatureProps) => {
	const { classes, cx } = useStyles();

	return (
		<div className={cx(classes.feature, className)} {...others}>
			<div className={classes.overlay} />

			<div className={classes.content}>
				<Icon size={38} className={classes.icon} />
				<Text
					weight={700}
					size="lg"
					mb="xs"
					mt={5}
					className={classes.title}
				>
					{title}
				</Text>
				<Text color="dimmed" size="sm">
					{description}
				</Text>
			</div>
		</div>
	);
};

export default Feature;
