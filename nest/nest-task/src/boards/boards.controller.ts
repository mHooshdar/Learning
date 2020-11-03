import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';

@ApiTags('boards')
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getUsers(): Promise<Board[]> {
    return this.boardsService.getBoards();
  }
}
