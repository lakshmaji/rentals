import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  public async create(user: UserEntity): Promise<UserEntity> {
    return await this.repository.save(user);
  }

  public async findOne(id: number): Promise<UserEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<UserEntity> {
    return await this.repository.findOne({ where: { email } });
  }

  public async update(id: number, user: Partial<UserEntity>): Promise<void> {
    await this.repository.update(id, user);
  }
}
