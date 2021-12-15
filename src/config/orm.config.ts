import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

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

module.exports = ormConfig;
