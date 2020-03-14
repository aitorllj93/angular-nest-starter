import dotenv from 'dotenv';

dotenv.config();

import { ExtractJwt } from 'passport-jwt';

import { UsersModule } from '../app/users/users.module';
import { UsersService } from '../app/users/users.service';

import { ModuleOptions } from '../app/security/auth.options';

export const authOptions: ModuleOptions = {
  usersModule: UsersModule,
  usersService: UsersService,
  clientSettings: {
    loginSuccessBaseUrl: process.env.LOGIN_SUCCESS_BASE_URL,
    loginErrorBaseUrl: process.env.LOGIN_ERROR_BASE_URL
  },
  passportSettings: {
    session: true
    // defaultStrategy: 'jwt'
  },
  jwtSettings: {
    secret: process.env.JWT_SECRET,
    // signOptions: { expiresIn: '60s' }
  },
  providers: {
    jwt: {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // TO-DO: Remove this
      secretOrKey: process.env.JWT_SECRET,
    },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: [
        'profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/calendar'
      ],
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    microsoft: {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
      scope: [
        "User.Read",
        // "email",
        "Notes.Create",
        "Notes.Read",
        "Notes.Read.All",
        "Notes.ReadWrite",
        "Notes.ReadWrite.All"
      ],
      callbackURL: process.env.MICROSOFT_CALLBACK_URL,
      passReqToCallback: true,
    },
    spotify: {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_CALLBACK_URL,
      passReqToCallback: true,
    }
  }
}
