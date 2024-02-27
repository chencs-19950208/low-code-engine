import { NestFactory } from '@nestjs/core';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 接口版本化管理
  app.enableVersioning({
    // defaultVersion: '1',
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI,
  });

  await app.listen(3000);
}
bootstrap();
