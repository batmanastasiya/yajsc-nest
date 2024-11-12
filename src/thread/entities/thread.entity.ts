import { BaseEntity, Column, Entity } from 'typeorm';

//CREATE TABLE public.thread (
//     id uuid NOT NULL,
//     name character varying NOT NULL
// );
@Entity()
export class Thread {
  @Column({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;
}
