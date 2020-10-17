import { Module } from '@nestjs/common';
import { MyTestService } from './my-test.service';
import { MyTestController } from './my-test.controller';

@Module({
  providers: [MyTestService],
  controllers: [MyTestController]
})
export class MyTestModule {}
