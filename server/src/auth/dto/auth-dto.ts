import { IsEmail, IsNotEmpty } from 'class-validator';

export default class AuthDto {
	@IsEmail()
	@IsNotEmpty()
	readonly email: string;

	@IsNotEmpty()
	readonly password: string;
}
