import { IUser } from 'models/session/IUser';
import { IComment } from './IComment';

export interface IPost {
	image: string;
	title: string;
	body: string;
	author: IUser | null;
	comments?: IComment[];
	tags: string[];
	createdAt?: number;
	updatedAt?: number;
	id?: number;
}
