import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { configSwagger } from './config/api-docs.config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  configSwagger(app);
  app.setGlobalPrefix('api');
  await app.listen(8080);
}
bootstrap();
