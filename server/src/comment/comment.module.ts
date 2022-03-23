import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
	providers: [CommentService],
	controllers: [CommentController],
	imports: [PrismaModule],
})
export class CommentModule {}
