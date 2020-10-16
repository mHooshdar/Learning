import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { logger as loggerMiddleWare } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/http-exception.filter';

async function bootstrap() {
  const serverConfig = config.get('server');
  
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors()
  }
  
  const port = process.env.PORT || serverConfig.port;
  app.use(loggerMiddleWare);
  // set global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(port);
  logger.log(`Aplication listening on port ${port}`);
}
bootstrap();
