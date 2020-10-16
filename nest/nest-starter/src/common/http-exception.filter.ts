import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';

// @Catch(ForbiddenException)
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const exceptionResponse: any = exception.getResponse();

    console.log(exception);

    const errorObject = {
      message: exceptionResponse.message || exceptionResponse,
      error: exception.message,
    };

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error:
        process.env.NODE_ENG === 'production'
          ? errorObject
          : {
              ...errorObject,
              stack: exception.stack,
            },
    });
  }
}
