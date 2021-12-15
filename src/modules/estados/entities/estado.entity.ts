import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('estados')
export class EstadoEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  sigla: string;
}
