import { Body, Controller, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { PostDto } from './dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards';

@Controller('posts')
export class PostController {
	constructor(private postService: PostService) {}

	@Get('all')
	getAllPosts() {
		return this.postService.getAllPosts();
	}

	@Get('user/:id')
	getAllUserPosts(@Param('id') id: string) {
		console.log(id + '');
		return this.postService.getAllUserPost(+id);
	}

	@UseGuards(AuthGuard)
	@Post('add')
	createNewPost(@Body() dto: PostDto) {
		return this.postService.createPost(dto);
	}

	@UseGuards(AuthGuard)
	@Delete(':id')
	deletePost(@Param('id') id: string) {
		return this.postService.deletePost(+id);
	}
	@UseGuards(AuthGuard)
	@Put('update')
	updatePost(@Body() dto: PostDto) {
		return this.postService.updatePost(dto);
	}

	@Get(':id')
	getPostById(@Param('id') id: string) {
		return this.postService.getById(+id);
	}
}
