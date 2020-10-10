import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockUser = new User();
mockUser.id = 12;
mockUser.username = 'test';

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn(),
  createTask: jest.fn(),
  delete: jest.fn(),
});

describe('TasksService', () => {
  let tasksService: TasksService;
  let taskRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTaskRepository },
      ],
    }).compile();

    tasksService = await module.get<TasksService>(TasksService);
    taskRepository = await module.get<TaskRepository>(TaskRepository);
  });

  describe('getTasks', () => {
    it('gets all tasks from the repository', async () => {
      taskRepository.getTasks.mockResolvedValue('someValue');

      expect(taskRepository.getTasks).not.toHaveBeenCalled();
      const filters: GetTasksFilterDto = {
        status: TaskStatus.IN_PROGRESS,
        search: 'Some search query',
      };
      const result = await tasksService.getTasks(filters, mockUser);
      expect(taskRepository.getTasks).toHaveBeenCalled();
      expect(result).toEqual('someValue');
    });
  });

  describe('getTaskById', () => {
    it('calls taskRepository.findOne() and succesfully retrieve and return the task', async () => {
      const mockTask = {
        title: 'Test Task',
        description: 'Test desc',
      };
      const mockId = 1;

      taskRepository.findOne.mockResolvedValue(mockTask);

      const result = await tasksService.getTaskById(mockId, mockUser);
      expect(result).toEqual(mockTask);

      expect(taskRepository.findOne).toHaveBeenCalledWith({
        where: { id: mockId, userId: mockUser.id },
      });
    });
    it('throws and error as task is not found ', async () => {
      taskRepository.findOne.mockResolvedValue(null);
      await expect(tasksService.getTaskById(1, mockUser)).rejects.toThrow();
    });
  });

  describe('createTask', () => {
    it('calls taskRepository.createTask() and returns the result', async () => {
      taskRepository.createTask.mockResolvedValue('someValue');

      expect(taskRepository.createTask).not.toHaveBeenCalled();
      const createTaskDto: CreateTaskDto = {
        title: 'Test title',
        description: 'Test description',
      };
      const result = await tasksService.createTask(createTaskDto, mockUser);
      expect(taskRepository.createTask).toHaveBeenCalledWith(
        createTaskDto,
        mockUser,
      );
      expect(result).toEqual('someValue');
    });
  });

  describe('deleteTask', () => {
    it('calls taskRepository.deleteTask() to delete a task', async () => {
      const mockId = 1;
      taskRepository.delete.mockResolvedValue({ affected: 1 });
      expect(taskRepository.delete).not.toHaveBeenCalled();
      await tasksService.deleteTask(mockId, mockUser);
      expect(taskRepository.delete).toHaveBeenCalledWith({
        id: mockId,
        userId: mockUser.id,
      });
    });

    it('throws an error as task could not be found', async () => {
      taskRepository.delete.mockResolvedValue({ affected: 0 });
      await expect(tasksService.deleteTask(1, mockUser)).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateTaskStatus', () => {
    it('calupdates a task status', async () => {
      const mockId = 1;
      const mockStatus = TaskStatus.DONE;
      const mockTask = {
        status: TaskStatus.OPEN,
        save: jest.fn().mockResolvedValue(true)
      }
      tasksService.getTaskById = jest.fn().mockResolvedValue(mockTask);
      expect(tasksService.getTaskById).not.toHaveBeenCalled();
      expect(mockTask.save).not.toHaveBeenCalled();
      const result = await tasksService.updateTaskStatus(mockId, mockStatus, mockUser);
      expect(tasksService.getTaskById).toHaveBeenCalled();
      expect(mockTask.save).toHaveBeenCalled();
      expect(result.status).toEqual(mockStatus);
    });
  });
});
