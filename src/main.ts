import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // para poner prefijo en mi ruta
  app.setGlobalPrefix('api/v1')
  // para usar los Pipes
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
