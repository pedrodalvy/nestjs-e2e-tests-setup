import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from './config/orm.config';
import { EstadosModule } from './modules/estados/estados.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
    }),
    TypeOrmModule.forRoot(ormConfig),
    EstadosModule,
  ],
})
export class AppModule {}
