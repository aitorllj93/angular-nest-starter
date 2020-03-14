import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './security/auth.module';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { authOptions } from '../config/auth.config';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT, 10),
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    //   entities: [User],
    //   synchronize: true,
    //   useUnifiedTopology: true
    // }),
    // GraphQLModule.forRoot(
    //   {
    //     autoSchemaFile: 'schema.gql',
    //     debug: true,
    //     playground: true,
    //     context: ({ req }) => ({ req }),
    //   }
    // ),
    // ServeStaticModule.forRoot({
    //   renderPath: '/app',
    //   rootPath: join(process.cwd(), 'dist', 'apps', 'app'),
    // }),
    // AuthModule.forRoot(authOptions),
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
