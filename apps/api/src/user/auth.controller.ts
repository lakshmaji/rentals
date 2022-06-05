import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto.ts';
import { UserEntity } from './entities/user.entity';

@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post('register')
  private register(@Body() body: RegisterDto): Promise<UserEntity> {
    return this.authService.register(body);
  }
}
