import {
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/common/decorator/roles.decorator';
import { HttpExceptionFilter } from 'src/common/filter/errors.filter';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { CustomAuthGuard } from 'src/common/guard/auth.guard';

@Controller('my-test')
export class MyTestController {
  @Get('t1')
  t() {
    throw new HttpException('This is a custom message', HttpStatus.FORBIDDEN);
  }

  @Get('t2')
  t2() {
    throw new ForbiddenException();
  }

  @Get('t3')
  @UseFilters(HttpExceptionFilter)
  t3() {
    throw new ForbiddenException();
  }

  @Get('t4')
  @Roles('admin')
  @UseGuards(new RolesGuard(new Reflector))
  t4() {
    return true
  }

  @Get('t5')
  @UseGuards(CustomAuthGuard)
  t5() {
    return true
  }
}
