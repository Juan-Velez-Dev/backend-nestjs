import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'The users has been successfully find.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':name')
  @ApiOkResponse({
    status: 200,
    description: 'The user has been successfully find.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  findOne(@Param('name') name: string) {
    return this.userService.findOne(name);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    description: 'The user has been successfully update.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    description: 'The user has been successfully delete.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
