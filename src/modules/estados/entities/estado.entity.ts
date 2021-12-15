import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('estados')
export class EstadoEntity {
  @BeforeInsert()
  setId() {
    this.id = uuidv4();
  }

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  sigla: string;
}
