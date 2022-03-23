import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaClient],
	imports: [PrismaModule, PrismaService],
})
export class UserModule {}
