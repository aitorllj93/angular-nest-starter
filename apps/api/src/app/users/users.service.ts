
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

import uuid from 'uuid/v4';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(data: Partial<User>) {
    const user = this.repository.create({
      id: data.id || uuid(),
      ...data
    });

    await this.repository.insert(user);

    return user;
  }

  async updateThirdParties(
    id: string,
    thirdParties: any
  ) {
    return this.repository.update({ id }, { thirdParties })
  }

  async findAll() {
    return this.repository.find();
  }

  async findById(id: string) {
    return this.repository.findOne({
      id
    });
  }

  async findOneByMail(email: string) {
    return this.repository.findOne({
      email
    })
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.repository.findOne({
      username
    });
  }
}
