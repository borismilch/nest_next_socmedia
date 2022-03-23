import { AuthDto } from '.';
import { IsNotEmpty, IsUrl } from 'class-validator';

export default class RegisterDto extends AuthDto {
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	@IsUrl()
	readonly picture: string;
}
