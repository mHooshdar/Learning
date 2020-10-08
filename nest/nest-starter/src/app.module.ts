import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

const envConfig = ConfigModule.forRoot();

import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    envConfig,
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
  ],
})
export class AppModule {}

// console.log(process.env);

