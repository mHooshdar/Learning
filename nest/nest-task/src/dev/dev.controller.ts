import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dev')
@Controller('dev')
@UseInterceptors(CacheInterceptor)
export class DevController {
  @Get()
  findAll(): string[] {
    // just called once !
    return [];
  }
}
