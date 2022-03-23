import { IUser } from 'models';

const fakeUsers: IUser[] = [
	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		email: 'bulo@gmail.com',
		name: 'Stepa',

		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdYljucVq5RDIztgRkz6lj5gmS7puBitEDLkh3HpvfqBsHROo9nZiDXoMCVuChaJgE4Q&usqp=CAU',
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		email: 'bulo@gmail.com',
		name: 'Stepa',

		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdYljucVq5RDIztgRkz6lj5gmS7puBitEDLkh3HpvfqBsHROo9nZiDXoMCVuChaJgE4Q&usqp=CAU',
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		email: 'putin@gmail.com',
		name: 'Stepa',

		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdYljucVq5RDIztgRkz6lj5gmS7puBitEDLkh3HpvfqBsHROo9nZiDXoMCVuChaJgE4Q&usqp=CAU',
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		email: 'lav@gmail.com',
		name: 'Stepa',

		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdYljucVq5RDIztgRkz6lj5gmS7puBitEDLkh3HpvfqBsHROo9nZiDXoMCVuChaJgE4Q&usqp=CAU',
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		email: 'shijga@gmail.com',
		name: 'Shojga',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdYljucVq5RDIztgRkz6lj5gmS7puBitEDLkh3HpvfqBsHROo9nZiDXoMCVuChaJgE4Q&usqp=CAU',
	},
];

export const [fakeUser]: IUser[] = fakeUsers;

export default fakeUsers;
