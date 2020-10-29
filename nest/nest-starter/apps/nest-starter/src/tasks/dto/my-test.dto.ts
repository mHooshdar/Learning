import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class MyTest {
  @IsNotEmpty()
  @ApiProperty({
    description: 'test',
  })
  hello: string;
}