import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	imports: [PrismaModule, JwtModule.register({})],
})
export class AuthModule {}
