import {
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from 'src/common/decorator/roles.decorator';
import { HttpExceptionFilter } from 'src/common/filter/errors.filter';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { CustomAuthGuard } from 'src/common/guard/auth.guard';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';
import { TimeoutInterceptor } from 'src/common/interceptor/timeout.interceptor';

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
}
