import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE ||dbConfig.type,
  // host: process.env.DB_HOST || dbConfig.host,
  // port: process.env.DB_PORT || dbConfig.port,
  // username: process.env.DB_USER || dbConfig.username,
  // password: process.env.DB_PASSWORD || dbConfig.password,
  // database: process.env.DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  url: process.env.DATABASE_URL,
  synchronize: process.env.DB_SYNCHRONIZE || dbConfig.synchronize,
};
