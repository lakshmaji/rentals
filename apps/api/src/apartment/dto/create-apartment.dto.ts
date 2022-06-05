import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateApartmentDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Please enter name',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(20, {
    message: 'Name must be less than 20 characters',
  })
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Provide description',
  })
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Provide size',
  })
  @IsNumber()
  readonly size: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Provide rooms',
  })
  @IsString()
  readonly rooms: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Provide address',
  })
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({
    message: 'Provide Monthly Rent',
  })
  readonly monthlyRent: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({
    message: 'Provide Security Deposit',
  })
  readonly securityDeposit: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Provide lat',
  })
  @IsNumber()
  readonly lat: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Provide lng',
  })
  @IsNumber()
  readonly lng: number;
}
