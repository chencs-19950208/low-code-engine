import { NestFactory } from '@nestjs/core';
import { VERSION_NEUTRAL, VersioningType, Module } from '@nestjs/common';

import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './doc';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  if(module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  const app = await NestFactory.create(AppModule);

  // 统一响应格式 useGlobalInterceptors 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 统一异常处理，按照顺序处理，先处理通用的，在处理http异常
  // useGlobalFilters 全局过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter())

  // 接口版本化管理
  app.enableVersioning({
    // defaultVersion: '1',
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI,
  });

  // 创建文档
  generateDocument(app);

  await app.listen(3000);
}

bootstrap();
