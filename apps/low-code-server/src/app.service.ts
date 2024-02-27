import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  };

  findAll(): string {
    return 'findAll - v1'
  };
}
