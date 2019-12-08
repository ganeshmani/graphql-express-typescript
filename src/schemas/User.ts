import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class User {
  @Field(type => Int)
  id: number;

  @Field()
  name: String;

  @Field()
  email: String;
}
