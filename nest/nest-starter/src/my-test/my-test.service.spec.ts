import { Test, TestingModule } from '@nestjs/testing';
import { MyTestService } from './my-test.service';

describe('MyTestService', () => {
  let service: MyTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyTestService],
    }).compile();

    service = module.get<MyTestService>(MyTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
