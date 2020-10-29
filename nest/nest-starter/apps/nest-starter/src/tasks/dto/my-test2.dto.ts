import {  ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MyTest2 {
  @IsNotEmpty()
  @ApiProperty({
    description: 'test2',
  })
  hello2: string;
}
