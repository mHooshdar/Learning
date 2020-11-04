import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { GetUser } from '../common/decorator/get-user.decorator';
import { UserEntity } from 'src/auth/user.entity';

@ApiTags('boards')
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getBoards(): Promise<Board[]> {
    return this.boardsService.getBoards();
  }

  @Post()
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: UserEntity,
  ): Promise<void> {
    return this.boardsService.createBoard(createBoardDto, user);
  }
}
