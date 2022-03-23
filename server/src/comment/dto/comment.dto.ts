import { IsNumber, IsNotEmpty } from 'class-validator';

export default class CommentDto {
	@IsNumber()
	readonly userId: number;

	@IsNotEmpty()
	readonly body: string;

	@IsNumber()
	readonly postId: number;
}
