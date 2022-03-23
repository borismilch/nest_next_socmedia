import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from './dto';

@Injectable()
export class PostService {
	constructor(private prisma: PrismaService) {}

	async createPost(dto: PostDto): Promise<Post> {
		const newPost = await this.prisma.post.create({
			data: {
				title: dto.title,
				description: dto.description,
				userId: dto.userId,
			},
		});

		return newPost;
	}

	async deletePost(id: number): Promise<Post> {
		const deletedPost = await this.prisma.post.delete({
			where: { id },
		});

		return deletedPost;
	}

	async updatePost(dto: PostDto): Promise<Post> {
		const updatedPost = await this.prisma.post.update({
			data: {
				title: dto.title,
				description: dto.description,
			},
			where: {
				id: dto.id,
			},
		});

		return updatedPost;
	}

	async getById(id: number): Promise<Post> {
		const claimedPost = await this.prisma.post.findFirst({
			where: { id },
			include: { comments: true, user: true },
		});

		return claimedPost;
	}

	async getAllPosts(): Promise<Post[]> {
		const claimedPosts = await this.prisma.post.findMany();

		return claimedPosts;
	}

	async getAllUserPost(userId: number): Promise<Post[]> {
		const usersPosts = await this.prisma.post.findMany({
			where: { userId },
		});

		return usersPosts;
	}
}
