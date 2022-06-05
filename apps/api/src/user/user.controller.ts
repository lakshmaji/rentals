import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/user.decorator';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findOne(@GetUser() user: UserEntity) {
    return this.userService.findOne(user.id);
  }
}
