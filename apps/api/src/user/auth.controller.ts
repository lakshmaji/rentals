import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto.ts';
import { UserEntity } from './entities/user.entity';

@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  private register(@Body() body: RegisterDto): Promise<UserEntity> {
    return this.authService.register(body);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  private async login(@Body() body: LoginDto): Promise<{ token: string }> {
    return await this.authService.login(body);
  }
}
