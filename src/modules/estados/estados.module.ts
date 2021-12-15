import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { EstadoEntity } from './entities/estado.entity';
import { EstadoType } from './entities/estado.type';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([EstadoEntity])],
      resolvers: [
        {
          DTOClass: EstadoType,
          EntityClass: EstadoEntity,
          create: { disabled: true },
          update: { disabled: true },
          delete: { disabled: true },
        },
      ],
    }),
  ],
})
export class EstadosModule {}
