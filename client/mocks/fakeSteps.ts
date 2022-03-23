import { IStep } from 'models/static';
import { Pencil, Photo } from 'tabler-icons-react';

const fakeSteps: IStep[] = [
	{
		icon: Pencil,
	},

	{
		icon: Photo,
	},
];

export default fakeSteps;

export const [fakeStep] = fakeSteps;
