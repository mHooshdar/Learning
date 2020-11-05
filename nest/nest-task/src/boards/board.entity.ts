import { UserEntity } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('board')
@Unique(['name'])
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @ManyToOne(
    type => UserEntity,
    user => user.boards,
    { eager: false }
  )
  creator: UserEntity;
}
