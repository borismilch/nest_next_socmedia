import React from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { IStep } from 'models/static';
interface StepperComponentProps {
	active: number;
	nextStep: () => void;
	prevStep: () => void;
	steps: IStep[];
	onCancel: () => void;
}

const StepperComponent: React.FC<StepperComponentProps> = (props) => {
	const { active, nextStep, prevStep, steps, onCancel } = props;
	const isFinish = active === steps.length;
	const isCancel = active === 0;

	return (
		<>
			<Stepper active={active} breakpoint="sm">
				{steps.map((item, idx) => (
					<Stepper.Step
						key={idx}
						icon={<item.icon size={18} />}
					></Stepper.Step>
				))}
			</Stepper>

			{!isFinish && (
				<Group position="center" mt="xl">
					<Button
						variant="default"
						onClick={isCancel ? onCancel : prevStep}
					>
						Back
					</Button>
					<Button onClick={nextStep}>
						{isFinish ? 'Finish' : 'Next Step'}
					</Button>
				</Group>
			)}
		</>
	);
};

export default StepperComponent;
