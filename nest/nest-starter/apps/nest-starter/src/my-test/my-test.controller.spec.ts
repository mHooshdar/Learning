import { Test, TestingModule } from '@nestjs/testing';
import { MyTestController } from './my-test.controller';

describe('MyTestController', () => {
  let controller: MyTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyTestController],
    }).compile();

    controller = module.get<MyTestController>(MyTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
