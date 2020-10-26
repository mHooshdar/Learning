import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, HttpModule, Module } from '@nestjs/common';
import { DevController } from './dev.controller';
import { DevService } from './dev.service';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    HttpModule
  ],
  controllers: [DevController],
  providers: [DevService],
})
export class DevModule {}
