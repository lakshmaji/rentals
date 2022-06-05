import { Controller, Get, UseGuards, Req, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/user.decorator';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private lo = new Logger('bello :: user controller');

  @Get()
  findOne(@GetUser() user: UserEntity) {
    this.lo.log(user);
    return this.userService.findOne(user.id);
  }
}
