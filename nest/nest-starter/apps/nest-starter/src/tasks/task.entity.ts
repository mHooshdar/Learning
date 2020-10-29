import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../auth/user.entity';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.OPEN,
  })
  @ApiProperty({
    type: 'enum',
    enum: TaskStatus,
  })
  status: TaskStatus;

  @ManyToOne(
    type => User,
    user => user.tasks,
    { eager: false },
  )
  @ApiProperty({ type: () => User })
  user: User;

  @ApiProperty()
  @Column()
  userId: number;
}
