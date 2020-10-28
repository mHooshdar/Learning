import { Test, TestingModule } from '@nestjs/testing';
import { AaGateway } from './aa.gateway';

describe('AaGateway', () => {
  let gateway: AaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AaGateway],
    }).compile();

    gateway = module.get<AaGateway>(AaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
