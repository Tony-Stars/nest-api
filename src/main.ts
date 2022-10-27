import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const port = process.env.API_PORT ?? 4000;

    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const documentation = new DocumentBuilder()
        .setTitle('Сервис для помощи в тренировках')
        .setDescription('Workouts REST API')
        .build();
    const document = SwaggerModule.createDocument(app, documentation);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(port);
}

bootstrap();
