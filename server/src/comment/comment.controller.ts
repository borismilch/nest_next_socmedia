import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards';
import { CommentService } from './comment.service';
import { CommentDto, UpdateCommentDto } from './dto';

@Controller('comments')
export class CommentController {
	constructor(private commentService: CommentService) {}

	@Get('all')
	getAllComments() {
		return this.commentService.getAllComments();
	}

	@UseGuards(AuthGuard)
	@Post('add')
	createNewComment(@Body() dto: CommentDto) {
		return this.commentService.createComment(dto);
	}

	@UseGuards(AuthGuard)
	@Delete(':id')
	deleteComment(@Param('id') id: string) {
		return this.commentService.deleteComment(+id);
	}
	@UseGuards(AuthGuard)
	@Put('update')
	updateComment(@Body() dto: UpdateCommentDto) {
		return this.commentService.updateComment(dto);
	}

	@Get(':id')
	getCommentById(@Param('id') id: string) {
		return this.commentService.getById(+id);
	}
}
