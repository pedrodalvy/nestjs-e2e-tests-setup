import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Estado1435359663062 implements MigrationInterface {
  private table = new Table({
    name: 'estados',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'nome',
        type: 'varchar',
        length: '100',
        isUnique: true,
      },
      {
        name: 'sigla',
        type: 'char',
        length: '2',
        isUnique: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
