import { EntityRepository, Repository } from 'typeorm';
import { BoardEntity } from './board.entity';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
  
}
