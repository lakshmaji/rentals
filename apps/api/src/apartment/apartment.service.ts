import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { ApartmentUser } from './entities/apartment-user.entity';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
    @InjectRepository(ApartmentUser)
    private readonly apartmentUserRepository: Repository<ApartmentUser>,
  ) {}

  async create(createApartmentDto: CreateApartmentDto, user: UserEntity) {
    const apartment = await this.apartmentRepository.create(createApartmentDto);
    apartment.owner = user;
    await this.apartmentRepository.save(apartment);
    return apartment;
  }

  findAll(ownerId = null) {
    const where = {};
    if (ownerId) {
      where['id'] = ownerId;
    } else {
      where['occupied'] = false;
    }
    return this.apartmentRepository.find({
      relations: ['owner'],
      where,
    });
  }

  findOne(id: number) {
    return this.apartmentRepository.findOne(id, { relations: ['owner'] });
  }

  findApartmentWithInterestedUsers(apartmentId: number) {
    return this.apartmentRepository.findOne(apartmentId, {
      relations: ['interestedUsers'],
    });
  }

  async createInterestForApartment(apartment: Apartment, user: UserEntity) {
    const apartmentUser = await this.apartmentUserRepository.create({
      user,
      apartment,
      accepted: false,
    });

    await this.apartmentUserRepository.save(apartmentUser);
    apartment.interestedUsers.push(apartmentUser);
    await this.apartmentRepository.save(apartment);
    return apartmentUser;
  }

  async findAptUserRecord(apartmentId: number, userId: number) {
    return await this.apartmentUserRepository.findOne({
      where: {
        apartment: {
          id: apartmentId,
        },
        user: {
          id: userId,
        },
      },
    });
  }

  async matchInterestForApartment(apartment, interestedUserId) {
    const apartmentInterestedUser = await this.findAptUserRecord(
      apartment.id,
      interestedUserId,
    );

    if (!apartmentInterestedUser) {
      throw new Error('This user is not interested in this apartment');
    }
    apartmentInterestedUser.accepted = true;
    await this.apartmentUserRepository.save(apartmentInterestedUser);
    apartment.occupied = true;
    await this.apartmentRepository.save(apartment);
    return apartmentInterestedUser;
  }

  async findOneWithInterests(apartmentId: number) {
    const apartment = await this.apartmentUserRepository.find({
      where: {
        apartment: apartmentId,
      },
      relations: ['user'],
    });

    return apartment;
  }
}
