import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TransformInterceptor, AllExceptionsFilter } from '@app/shared';
import { HttpAdapterHost } from '@nestjs/core';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  
  // Estandariza todas las respuestas de la API
  app.useGlobalInterceptors(new TransformInterceptor());
  
  // Centraliza todos los errores
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  
  // 1. Seguridad HTTP: Agregar cabeceras para prevenir ataques XSS, Clickjacking, etc.
  app.use(helmet());

  // 2. Seguridad CORS: Solo permitir peticiones desde orígenes confiables
  app.enableCors({
    origin: process.env.FRONTEND_URL || '*', // En producción cambiar '*' por 'https://mi-billetera.com'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  const config = new DocumentBuilder()
    .setTitle('FinWallet API')
    .setDescription('The FinWallet API description')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Transactions')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name is used in @ApiBearerAuth()
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.port ?? 3000);
}
await bootstrap();
