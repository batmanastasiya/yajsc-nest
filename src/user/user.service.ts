import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUserByUsername(username: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ username });
  }

  async createUser(createUserDto: CreateUserDto) {
    const exist = await this.getUserByUsername(createUserDto.username);
    if (exist) {
      throw new BadRequestException('Username is already taken');
    }
    const user = new User(createUserDto);
    console.log(user);
    await this.usersRepository.save(user);

    // this is the way to pull the user role based on relation set in the entity
    const userWithRole = await this.usersRepository.findOne({
      where: { id: user.id },
      relations: ['role'],
    });

    console.log(userWithRole.role);

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
