
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config = require('config');
import { AuthModule } from './auth/auth.module';
import { DevModule } from './dev/dev.module';
import { ScheduleModule } from '@nestjs/schedule';
import { FilesModule } from './files/files.module';

const dbConfig = config.get('db');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION || dbConfig.type, // TYPEORM_CONNECTION
      host: process.env.TYPEORM_HOST || dbConfig.host, // TYPEORM_HOST
      port: process.env.TYPEORM_PORT || dbConfig.port, // TYPEORM_PORT
      username: process.env.TYPEORM_USERNAME || dbConfig.username, // TYPEORM_USERNAME
      password: process.env.TYPEORM_PASSWORD || dbConfig.password, // TYPEORM_PASSWORD
      database: process.env.TYPEORM_DATABASE || dbConfig.database, // TYPEORM_DATABASE
      synchronize:
        process.env.TYPEORM_SYNCHRONIZE ||
        dbConfig.synchronize ||
        process.env.NODE_ENV !== 'production', // TYPEORM_SYNCHRONIZE
      entities: [__dirname + '/**/*.entity.{js,ts}'], // TYPEORM_ENTITIES
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    DevModule,
    FilesModule,
  ],
})
export class AppModule {}
