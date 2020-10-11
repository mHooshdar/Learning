import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessons {
  @IsUUID()
  @Field(type => ID)
  lessonId: string;

  @Field(type => [ID])
  @IsUUID("all", { each: true })
  studentIds: string[];
}
