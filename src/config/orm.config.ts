import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { env } from 'process';

const ormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/db.sqlite',
  entities: [path.resolve(__dirname, '..', '**', '*.entity{.ts,.js}')],
  migrations: [
    path.resolve(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
  cli: {
    migrationsDir: path.resolve(__dirname, '..', 'database', 'migrations'),
  },
};

const ormTestConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: `:memory:`,
  entities: [path.resolve(__dirname, '..', '**', '*.entity{.ts,.js}')],
  migrations: [
    path.resolve(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
  cli: {
    migrationsDir: path.resolve(__dirname, '..', 'database', 'migrations'),
  },
};

module.exports = env.NODE_ENV === 'test' ? ormTestConfig : ormConfig;
