import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { UserEntity } from './user.entity';

@Entity('role')
@Unique(['name'])
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Exclude()
  name: string;

  @ManyToMany(
    type => UserEntity,
    user => user.roles,
    { eager: true },
  )
  users: UserEntity[];
}
