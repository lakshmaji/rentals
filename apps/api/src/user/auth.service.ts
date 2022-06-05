import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthHelper } from './auth.helper';
import { RegisterDto } from './dto/register.dto.ts';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly helper: AuthHelper,
  ) {}

  public async register(body: RegisterDto): Promise<UserEntity> {
    const { name, email, password }: RegisterDto = body;
    let user: UserEntity = await this.userService.findByEmail(email);

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new UserEntity();

    user.name = name;
    user.email = email;
    user.password = this.helper.encodePassword(password);

    return this.userService.create(user);
  }
}
