import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const PORT = +process.env.PORT || 5001;

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: false,
		}),
	);

	app.enableCors();

	await app.listen(PORT, () =>
		console.log('Server gas been started on port ' + PORT),
	);
}
bootstrap();
