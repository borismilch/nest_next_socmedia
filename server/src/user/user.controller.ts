import {
	Controller,
	Get,
	Put,
	Delete,
	Param,
	Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards';
import { GetUser } from './decorators';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(AuthGuard)
	@Get('me')
	getCurrentUser(@GetUser() currentUser: User) {
		return currentUser;
	}

	@UseGuards(AuthGuard)
	@Get('all')
	getAllUsers() {
		return this.userService.getUsers();
	}

	@UseGuards(AuthGuard)
	@Delete(':id')
	deleteUser(@Param('id') id: string) {
		return this.userService.deleteUsers(+id);
	}

	@Put()
	changeUserData(@Body() updateUser: User) {
		return this.userService.updateUser(updateUser);
	}
}
