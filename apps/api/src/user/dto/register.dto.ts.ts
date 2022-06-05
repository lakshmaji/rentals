import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  public readonly email: string;

  public readonly password: string;

  @IsString()
  public readonly name: string;
}
