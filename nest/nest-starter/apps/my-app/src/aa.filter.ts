import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AaFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
