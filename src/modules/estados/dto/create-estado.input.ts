import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsString, Length } from 'class-validator';

@InputType()
export class CreateEstadoInput {
  @Field({ description: 'nome do estado' })
  @IsString()
  nome: string;

  @IsAlpha()
  @Length(2, 2)
  @Field({ description: 'sigla do estado' })
  sigla: string;
}
