import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/public.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto.ts';
import { UserEntity } from './entities/user.entity';

@ApiTags('auth')
@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  private register(@Body() body: RegisterDto): Promise<UserEntity> {
    return this.authService.register(body);
  }

  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  private async login(@Body() body: LoginDto): Promise<{ token: string }> {
    return await this.authService.login(body);
  }
}
