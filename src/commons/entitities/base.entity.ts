import { BeforeInsert, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class BaseEntity {
  @BeforeInsert()
  setId() {
    this.id = uuidv4();
  }

  @PrimaryColumn()
  id: string;
}
