import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { BoardEntity } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  getBoards(): Promise<BoardEntity[]> {
    return this.boardRepository.find();
  }

  async createBoard(createBoardDto: CreateBoardDto, user: UserEntity) {

  }
}
