import {
  CacheInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { ACGuard, UseRoles, UserRoles } from 'nest-access-control';

@ApiTags('dev')
@Controller('dev')
export class DevController {
  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(): string[] {
    // just called once !
    return [];
  }

  @UseGuards(AuthGuard(), ACGuard)
  @UseRoles({
    resource:  'board',
    action:  'read',
    possession:  'any',
  })
  @Get('test')
  test(@UserRoles() userRoles: any) {
    console.log(userRoles);
    return 'aaa'
  }
}
