import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import findUser from 'src/helpers/findUser';

let users = [];

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    users.push(createUserDto);
    return users;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(name: string) {
    console.log(name);
    return findUser('name', name);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
