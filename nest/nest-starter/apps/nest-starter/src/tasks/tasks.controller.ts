import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipes';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { GetUser } from '../common/decorator/get-user.decorator';
import { User } from '../auth/user.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from './dto/file-upload.dto';

@ApiTags('tasks')
@Controller('tasks')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class TasksController {
  private logger = new Logger('TasksController');

  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    this.logger.verbose(
      `User "${user.username}" retreiving all tasks. Filters: "${JSON.stringify(
        filterDto,
      )}"`,
    );
    return this.taskService.getTasks(filterDto, user);
  }

  @Get(':id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.getTaskById(id, user);
  }

  // createTask(@Body() body) {
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {1
  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Task,
  })
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    this.logger.verbose(
      `User "${user.username}" creating a new task. Data: "${JSON.stringify(
        createTaskDto,
      )}"`,
    );
    return this.taskService.createTask(createTaskDto, user);
  }

  @Post('/array')
  @UsePipes(ValidationPipe)
  @ApiBody({ type: [CreateTaskDto] })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createTaskArray(
    @Body() createTaskDto: CreateTaskDto[],
    @GetUser() user: User,
  ) {
    this.logger.verbose(
      `User "${user.username}" creating a new task. Data: "${JSON.stringify(
        createTaskDto,
      )}"`,
    );
  }

  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'file',
    type: FileUploadDto,
  })
  uploadFile(@UploadedFile() file) {}

  @Delete('/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.taskService.deleteTask(id, user);
  }

  @Patch(':id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.updateTaskStatus(id, status, user);
  }
}
