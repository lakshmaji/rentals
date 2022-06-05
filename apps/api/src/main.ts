import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const docBuild = new DocumentBuilder()
    .setTitle('Apartments API')
    .setDescription('Apartments API spec')
    .setVersion('1.0')
    .addTag('apartments')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docBuild);
  SwaggerModule.setup('docs', app, document);

  const config = app.get(ConfigService);

  app.enableCors({
    origin: config.get('clientOrigins').split(','),
  });

  await app.listen(config.get('port'));
}
bootstrap();
