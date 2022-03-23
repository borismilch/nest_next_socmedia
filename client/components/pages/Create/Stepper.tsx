import { Stepper } from '@shared/forms';
import { fakeSteps } from 'mocks';
import { useNavigation } from 'hooks';
import { FirstStep, SecondStep, ThirdStep } from './steps/';
import { useStepper } from 'hooks';

const StepArray = [FirstStep, SecondStep, ThirdStep];

const FormStepper = () => {
	const { pushRouter, backRouter } = useNavigation();
	const { active, nextStep, prevStep } = useStepper();

	const onCancel = () => {
		console.log('canceled');
		backRouter();
	};

	const CurrentStep = StepArray[active];

	return (
		<>
			<CurrentStep />

			<Stepper
				active={active}
				nextStep={nextStep}
				onCancel={onCancel}
				prevStep={prevStep}
				steps={fakeSteps}
			/>
		</>
	);
};

export default FormStepper;
