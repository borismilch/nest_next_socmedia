import { IUser } from 'models/session/IUser';
import { IPost } from './IPost';

export interface IComment {
	userId: number;
	postId: number;
	body: string;
	author: IUser;
	post?: IPost;
	createdAt?: number;
	updatedAt?: number;
}
