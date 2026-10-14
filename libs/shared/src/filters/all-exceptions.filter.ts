import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // En ciertos contextos (ej. microservicios TCP/RabbitMQ), HttpAdapterHost puede no estar disponible
    const { httpAdapter } = this.httpAdapterHost || {};

    const ctx = host.switchToHttp();

    // Si no estamos en contexto HTTP (ej. estamos en RabbitMQ), solo logueamos
    if (!httpAdapter) {
       console.error('Non-HTTP Exception:', exception);
       return;
    }

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse: any = 
      exception instanceof HttpException 
        ? exception.getResponse() 
        : { message: 'Internal server error' };

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message: exceptionResponse.message || exceptionResponse || 'Something went wrong',
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
