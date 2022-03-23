import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto, UpdateCommentDto } from './dto';
import { Comment } from '@prisma/client';

@Injectable()
export class CommentService {
	constructor(private prisma: PrismaService) {}

	async createComment(dto: CommentDto): Promise<Comment> {
		const newComment = await this.prisma.comment.create({
			data: {
				body: dto.body,
				userId: dto.userId,
				postId: dto.postId,
			},
		});

		return newComment;
	}

	async deleteComment(id: number): Promise<Comment> {
		const deletedComment = await this.prisma.comment.delete(
			{
				where: { id },
			},
		);

		return deletedComment;
	}

	async updateComment(
		dto: UpdateCommentDto,
	): Promise<Comment> {
		const updatedComment = await this.prisma.comment.update(
			{
				data: { body: dto.body },
				where: { id: dto.id },
			},
		);

		return updatedComment;
	}

	async getById(id: number): Promise<Comment> {
		const claimedComment =
			await this.prisma.comment.findFirst({
				where: { id },
			});

		return claimedComment;
	}

	async getAllComments(): Promise<Comment[]> {
		const claimedComments =
			await this.prisma.comment.findMany();

		return claimedComments;
	}

	async getAllUserComment(
		userId: number,
	): Promise<Comment[]> {
		const usersComments =
			await this.prisma.comment.findMany({
				where: { userId },
			});

		return usersComments;
	}
}
