import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from '../tasks/task.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(
    type => Task,
    task => task.user,
    { eager: true },
  )
  @ApiProperty({ type: () => [Task] })
  tasks: Task[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
