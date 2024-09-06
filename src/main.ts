import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // * Doccumentation with swagger
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve propiedades no definidas en los DTOs automáticamente
      forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no permitidas
      transform: true, // Transforma los tipos a los definidos en los DTOs
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Mi Api')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // * Doccumentation with swagger
  await app.listen(3000);
}
bootstrap();
