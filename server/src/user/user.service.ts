import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaClient) {}

	async getUsers(): Promise<User[]> {
		return this.prisma.user.findMany({
			include: {
				bookmarks: true,
			},
		});
	}

	async deleteUsers(userId: number): Promise<User> {
		return await this.prisma.user.delete({
			where: {
				id: userId,
			},
		});
	}

	async updateUser(user: User): Promise<User> {
		return await this.prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				name: user.name,
			},
		});
	}
}
