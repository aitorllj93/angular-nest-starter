import { Controller, Get, Post, Request, UseGuards, Req, Res, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/spotify')
export class SpotifyController {

  constructor(
    @Inject('AUTH_CLIENT_SETTINGS') private clientSettings: any
  ) {}

  @UseGuards(AuthGuard('spotify'))
  @Get()
  async login(@Request() req) {
    // initiates the spotify OAuth2 login flow
  }

  @UseGuards(AuthGuard('spotify'))
  @Get('callback')
  async callback(@Req() req, @Res() res) {
    // handles the spotify OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt)
      res.redirect(`${this.clientSettings.loginSuccessBaseUrl}?token=${jwt}`);
    else
      res.redirect(`${this.clientSettings.loginErrorBaseUrl}?failed=true`);
  }

}
