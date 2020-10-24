import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { AppModule } from './app.module';

const serverConfig = config.get('server');

async function bootstrap() {
  const port = process.env.PORT || serverConfig.port;
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  logger.log(`Aplication listening on port ${port}`);
}
bootstrap();
