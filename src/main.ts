import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configSwagger } from './config/api-docs.config';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
    logger: ['error', 'warn'],
  })
  configSwagger(app);
  app.setGlobalPrefix('api');
  console.log('Database connected', process.env.DATABASE_URL);
  await app.listen(8080);
}
bootstrap();
