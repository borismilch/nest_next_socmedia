import { IComment } from 'models/posts/IComment';
import { IPost } from 'models/posts/IPost';

export interface IUser {
	picture: string;
	email: string;
	name: string;
	posts?: IPost[];
	comments?: IComment[];
	createdAt?: number;
	updatedAt?: number;
	password: string;
	backbroundImage?: string;
}
