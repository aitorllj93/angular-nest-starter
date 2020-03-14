import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UseGuards, Inject } from '@nestjs/common';

import { GqlAuthGuard } from '../guards/gql.guard';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../../users/users.entity';
import { UsersService } from '../users.interface';

@Resolver(of => User)
export class SessionResolver {
  constructor(
    @Inject('AuthUsersService')
    private readonly usersService: UsersService,
  ) {}

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  async currentUser(@CurrentUser() user: User): Promise<User> {
    return this.usersService.findOne(user.username);
  }
}
