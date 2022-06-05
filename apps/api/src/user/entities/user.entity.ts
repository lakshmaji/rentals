import { Exclude } from 'class-transformer';
import { ApartmentUser } from 'src/apartment/entities/apartment-user.entity';
import { Apartment } from 'src/apartment/entities/apartment.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  @OneToMany(() => Apartment, (apartment) => apartment.owner)
  public apartments: Apartment[];

  @OneToMany(() => ApartmentUser, (interestedUser) => interestedUser.apartment)
  public interestedApartments!: ApartmentUser[];
}
