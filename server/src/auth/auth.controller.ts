import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto, RegisterDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private auth: AuthService) {}

	@Post('login')
	login(@Body() dto: AuthDto) {
		return this.auth.login(dto);
	}

	@Post('register')
	register(@Body() dto: RegisterDto) {
		return this.auth.register(dto);
	}

	@Post('provider')
	signInWithProvider(@Body() dto: RegisterDto) {
		return this.auth.signInWithProvider(dto);
	}
}
