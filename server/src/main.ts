import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/secrets/key.pem'),
    cert: fs.readFileSync('./src/secrets/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.enableCors();

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get<number>('port');

  await app.listen(port, () => {
    console.log(`App listening on port -> ${port}`);
  });
}

bootstrap();
