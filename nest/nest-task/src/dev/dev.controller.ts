import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';

@Controller('dev')
@UseInterceptors(CacheInterceptor)
export class DevController {
  @Get()
  findAll(): string[] {
    // just called once !
    return [];
  }
}
