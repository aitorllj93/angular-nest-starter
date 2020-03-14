import { Controller, Get, Post, Request, UseGuards, Req, Res, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/google')
export class GoogleController {

  constructor(
    @Inject('AUTH_CLIENT_SETTINGS') private clientSettings: any
  ) {}

  @UseGuards(AuthGuard('google'))
  @Get()
  async login(@Request() req) {
    // initiates the Google OAuth2 login flow
  }

  @UseGuards(AuthGuard('google'))
  @Get('callback')
  async callback(@Req() req, @Res() res) {
    // handles the Google OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt)
      res.redirect(`${this.clientSettings.loginSuccessBaseUrl}?token=${jwt}`);
    else
      res.redirect(`${this.clientSettings.loginErrorBaseUrl}?failed=true`);
  }

}
