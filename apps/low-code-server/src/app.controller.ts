import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { BusinessException } from './common/exceptions/business.exception.filter';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configServeice: ConfigService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  findAll(): string {
    return this.appService.findAll();
  };

  @Get()
  @Version('2')
  findAll2(): string {
    return 'chencs'
  };

  @Get('findError')
  @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: any = {};
    console.log(a.b.c);
    return this.appService.getHello();
  };

  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try{
      console.log(a.b.c);
    } catch(e) {
      throw new BusinessException('sorry, 您的参数貌似出现了问题')
    };

    return this.appService.findAll();
  };


  @Get('getTestName')
  getTestName() {
    return this.configServeice.get('TEST_VALUE').name;
  }
}
