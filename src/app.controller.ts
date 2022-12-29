import {Controller, Get, Req, Res} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('index.html')
  getFile(@Req() req, @Res() res) {
    console.log('Controller response:', res);
    
    // next();
    res.send('hello world');
  }
}
