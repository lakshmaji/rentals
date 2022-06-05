import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column()
  password: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;
}
