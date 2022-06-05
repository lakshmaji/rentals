import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApartmentUser } from './apartment-user.entity';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  description: string;

  @Column()
  size: number;

  @Column()
  rooms: string;

  @Column()
  address: string;

  @Column()
  monthlyRent: number;

  @Column()
  securityDeposit: number;

  @Column({ default: false })
  occupied: boolean;

  @Column('float')
  lat: number;

  @Column('float')
  lng: number;

  @ManyToOne(() => UserEntity, (owner: UserEntity) => owner.apartments)
  public owner: UserEntity;

  @OneToMany(() => ApartmentUser, (interestedUser) => interestedUser.user)
  public interestedUsers!: ApartmentUser[];
}
