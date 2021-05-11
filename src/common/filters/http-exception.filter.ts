import {ArgumentsHost, ExceptionFilter, HttpException} from "@nestjs/common";
import { Response } from 'express';

export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error = typeof response === 'string'
      ? { message: exceptionResponse}
      : { message: exceptionResponse};

    response.status(status).json({
      status,
      ...error,
      timestamp: new Date().toISOString(),
    });

  }
}
