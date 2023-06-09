import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get<number>('port');

  await app.listen(port, () => {
    console.log(`App listening on port -> ${port}`);
  });
}

bootstrap();
