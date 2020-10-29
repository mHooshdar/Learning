import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
import { MyTest } from './my-test.dto';
import { MyTest2 } from './my-test2.dto';

@ApiExtraModels(MyTest2)
export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title of a task',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Description of a task',
  })
  description: string;

  @ApiProperty({ type: MyTest })
  jj: MyTest;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(MyTest) }, { $ref: getSchemaPath(MyTest2) }],
  })
  exampleOneOf: MyTest | MyTest2;

  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;
}
