import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './create-lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.types';
import { AssignStudentsToLessons } from './assign-students-t-lessons.input';
import { StudentService } from 'src/student/student.service';
import { Student } from 'src/student/student.entity';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(returns => LessonType)
  lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInputs: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInputs);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLessons(
    @Args('assignStudentsToLessons')
    assignStudentsToLessons: AssignStudentsToLessons,
  ): Promise<Lesson> {
    return this.lessonService.assignStudentsToLesson(assignStudentsToLessons);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson){
    return this.studentService.getManyStudents(lesson.students);
  }
}
