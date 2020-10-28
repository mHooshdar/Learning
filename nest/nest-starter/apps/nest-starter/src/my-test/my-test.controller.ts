import {
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Render,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from '../common/decorator/roles.decorator';
import { HttpExceptionFilter } from '../common/filter/errors.filter';
import { CustomAuthGuard } from '../common/guard/auth.guard';
import { RolesGuard } from '../common/guard/roles.guard';
import { LoggingInterceptor } from '../common/interceptor/logging.interceptor';
import { TimeoutInterceptor } from '../common/interceptor/timeout.interceptor';

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
  @UseGuards(RolesGuard)
  t4() {
    return true;
  }

  @Get('t5')
  @UseGuards(CustomAuthGuard)  
  t5() {
    return true;
  }

  @Get('t6')
  @UseInterceptors(LoggingInterceptor)
  @UseInterceptors(TimeoutInterceptor)
  async t6() {
    // sleep function
    await new Promise(resolve => setTimeout(resolve, 7000));

    return {
      a: null,
      b: 'hello'
    };
  }

  @Get('t7')
  @Render('index')
  t7 () {
    return { message: 'Hello world!' };
  }
}
