import { Controller, Req, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('*')
  gatewayRedirect(@Req() req, @Res() res) {
    console.log('received');
    res.redirect(307, `http://localhost:3001${req.url}`)
  }
}
