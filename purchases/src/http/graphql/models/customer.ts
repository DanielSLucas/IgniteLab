import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchase } from './purchase';

// Essa diretiva indica o campo em comum entre os customers e os students
@ObjectType('User')
@Directive('@key(fields: "authUserId")')
export class Customer {
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
