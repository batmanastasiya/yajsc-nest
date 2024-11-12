import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async findAll() {
    return await this.rolesRepository.find();
  }

  // create(createRoleDto: CreateRoleDto) {
  //   return 'This action adds a new role';
  // }
  //
  // findOne(id: string) {
  //   return `This action returns a #${id} role`;
  // }
  //
  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return `This action updates a #${id} role`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} role`;
  // }
  // TODO: DB migration instead of seeding directly
  async seedDefaultRoles() {
    const count = await this.rolesRepository.count();
    if (count > 0) return;

    return this.rolesRepository.save([
      { id: 'a9177d9f-31ad-4686-a44e-b784f5791a4f', name: 'admin' },
      { id: 'f099b2bb-f17a-4266-9f0a-57b279e720db', name: 'mentor' },
      { id: '946a3850-0dfb-4fe8-8660-cb1eceaeb41c', name: 'student' },
    ]);
  }
}
