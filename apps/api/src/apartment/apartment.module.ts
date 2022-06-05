import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './entities/apartment.entity';
import { ApartmentUser } from './entities/apartment-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment, ApartmentUser])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
