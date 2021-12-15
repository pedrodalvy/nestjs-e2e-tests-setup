import { InputType, PartialType } from '@nestjs/graphql';
import { CreateEstadoInput } from './create-estado.input';

@InputType()
export class UpdateEstadoInput extends PartialType(CreateEstadoInput) {}
