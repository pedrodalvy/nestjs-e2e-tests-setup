import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { getConnection } from 'typeorm';
import * as ormConfig from '../../src/config/orm.config';

export const beforeAllDefault = async (): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [TypeOrmModule.forRoot(ormConfig), AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const connection = await getConnection();
  await connection.runMigrations();

  return app.init();
};

export const afterAllDefault = async (app: INestApplication): Promise<void> => {
  await app.close();
};
