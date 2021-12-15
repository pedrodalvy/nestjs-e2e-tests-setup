import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Estado')
export class EstadoType {
  @Field(() => ID)
  id: string;

  @FilterableField({ description: 'nome do estado' })
  nome: string;

  @FilterableField({ description: 'sigla do estado' })
  sigla: string;
}
