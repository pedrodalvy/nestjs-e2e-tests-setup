import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { EstadoEntity } from './entities/estado.entity';
import { EstadoType } from './entities/estado.type';
import { CreateEstadoInput } from './dto/create-estado.input';
import { UpdateEstadoInput } from './dto/update-estado.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([EstadoEntity])],
      resolvers: [
        {
          DTOClass: EstadoType,
          EntityClass: EstadoEntity,
          CreateDTOClass: CreateEstadoInput,
          UpdateDTOClass: UpdateEstadoInput,
        },
      ],
    }),
  ],
})
export class EstadosModule {}
