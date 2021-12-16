import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../../../commons/entitities/base.entity';

@Entity('estados')
export class EstadoEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  sigla: string;
}
