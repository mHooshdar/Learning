// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const envConfig = ConfigModule.forRoot({
  isGlobal: true,
});

import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
// import { logger as loggerMiddleware } from './common/middleware/logger.middleware';
// import { TasksController } from './tasks/tasks.controller';
import { MyTestModule } from './my-test/my-test.module';

@Module({
  imports: [
    envConfig,
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
    MyTestModule,
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
// configure(consumer: MiddlewareConsumer) {
//   consumer.apply(loggerMiddleware)..exclude(
//     { path: 'cats', method: RequestMethod.GET },
//     { path: 'cats', method: RequestMethod.POST },
//     'cats/(.*)',
//   )
// .forRoutes(TasksController);
// }
// }
