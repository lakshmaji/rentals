import { UserEntity } from 'src/user/entities/user.entity';
import { ManyToOne, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Apartment } from './apartment.entity';

@Entity()
export class ApartmentUser {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ default: false })
  public accepted!: boolean;

  @ManyToOne(() => Apartment, (apartment) => apartment.interestedUsers, {
    cascade: true,
  })
  public apartment!: Apartment;

  @ManyToOne(() => UserEntity, (user) => user.interestedApartments, {
    cascade: true,
  })
  public user!: UserEntity;
}
