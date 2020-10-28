import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {}

  async createMany(users: User[]) {
    const queryRunner = this.connection.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(users[0]);
      await queryRunner.manager.save(users[1]);
  
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
  
}
