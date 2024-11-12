import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

//CREATE TABLE public.roles (
//     id character varying NOT NULL,
//     name character varying NOT NULL
// );
@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid') //I see uuid in DB, but in the snippet above it's character varying
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
