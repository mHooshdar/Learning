import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AaGateway } from './aa.gateway';
import { Aa } from './aa';
import { AaResolver } from './aa/aa.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Aa, AaResolver],
})
export class AppModule {}
