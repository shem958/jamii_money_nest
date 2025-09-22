import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (for frontend access)
  app.enableCors();

  // ✅ Global validation for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,      // Strip unknown properties
      forbidNonWhitelisted: true, // Throw error if unknown props are sent
      transform: true,      // Automatically transform payloads to DTO classes
    }),
  );

  // ✅ Use environment PORT or fallback to 3000
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
}

bootstrap();
