import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';

// @Catch(ForbiddenException)
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse: any =
      exception instanceof HttpException ? exception.getResponse() : undefined;
    const errorObject = {
      message: exceptionResponse
        ? exceptionResponse.message || exceptionResponse
        : exception.message,
    };

    const error =
      process.env.NODE_ENG === 'production'
        ? errorObject
        : {
            ...errorObject,
            stack: exception.stack,
          };

    if (status !== HttpStatus.INTERNAL_SERVER_ERROR) {
      delete error['stack'];
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      ...error,
    });
  }
}
