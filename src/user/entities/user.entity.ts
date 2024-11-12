import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity({ schema: 'public', name: 'users' })
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ name: 'role_id', type: 'uuid', nullable: false })
  roleId: string;

  @Column({ name: 'firstname', type: 'varchar', nullable: true })
  firstName: string;

  @Column({ name: 'lastname', type: 'varchar', nullable: true })
  lastName: string;

  @Column({ name: 'phone', type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ name: 'telegram', type: 'varchar', nullable: true })
  telegram: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  constructor(partial: Partial<User>) {
    // noinspection TypeScriptValidateTypes
    Object.assign(this, partial);
  }
}
