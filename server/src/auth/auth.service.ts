import {
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, RegisterDto } from './dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export interface IToken {
	acess_token: string;
}

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private config: ConfigService,
	) {}

	async register(dto: RegisterDto): Promise<IToken> {
		const dbUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email,
			},
		});

		if (dbUser) {
			throw new ForbiddenException('Email already exists');
		}

		const hash: string = await argon.hash(dto.password);

		const newUser = await this.prisma.user.create({
			data: {
				email: dto.email,
				password: hash,
				name: dto.name,
				picture: dto.picture,
			},
		});

		return this.signToken(newUser.email, newUser.id);
	}
	async login(dto: AuthDto): Promise<IToken> {
		const dbUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email,
			},
		});

		if (!dbUser) {
			throw new NotFoundException(
				'User not found',
				'Provided data is invalid',
			);
		}

		const isSame: boolean = await argon.verify(
			dbUser.password,
			dto.password,
		);

		if (!isSame) {
			throw new ForbiddenException(
				'Password is not match',
				'invalid password',
			);
		}

		return this.signToken(dbUser.email, dbUser.id);
	}
	async signToken(
		email: string,
		userId: number,
	): Promise<{ acess_token: string }> {
		const payload = {
			sub: userId,
			email,
		};

		const token = this.jwt.sign(payload, {
			expiresIn: '30d',
			secret: this.config.get('JWT_SECRET'),
		});

		return {
			acess_token: token,
		};
	}
	async signInWithProvider(dto: RegisterDto) {
		const dbUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email,
			},
		});

		if (!dbUser) {
			const newUser = await this.prisma.user.create({
				data: {
					email: dto.email,
					password: 'dskldkjdskjlskljdsksdskl',
					name: dto.name,
					picture: dto.picture,
				},
			});

			return this.signToken(newUser.email, newUser.id);
		}

		return this.signToken(dbUser.email, dbUser.id);
	}
}
