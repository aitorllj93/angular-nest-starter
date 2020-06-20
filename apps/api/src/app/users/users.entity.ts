
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Generated, ObjectID, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Json } from '../common/scalars/json.scalar';

@Entity()
@ObjectType()
export class User {

  @ObjectIdColumn()
  _id?: ObjectID

  @Field()
  @Column()
  @Generated('uuid')
  id: string;

  @Field()
  @Column('text')
  email: string;

  @Field()
  @Column('text')
  username: string;

  @Field()
  @Column('text')
  password: string;

  @Field()
  @Column('text')
  picUrl: string;

  @Field(type => Json)
  @Column('json')
  thirdParties: any;

}
