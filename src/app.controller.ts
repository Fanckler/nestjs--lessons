import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() param: any): string {
    return `Test`
  }


}
