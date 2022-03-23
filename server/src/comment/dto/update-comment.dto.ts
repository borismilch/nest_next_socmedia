import { IsNumber } from 'class-validator';
import { CommentDto } from './';

export default class UpdateCommentDto extends CommentDto {
	@IsNumber()
	readonly id: number;
}
