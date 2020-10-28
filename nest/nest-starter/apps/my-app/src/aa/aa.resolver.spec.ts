import { Test, TestingModule } from '@nestjs/testing';
import { AaResolver } from './aa.resolver';

describe('AaResolver', () => {
  let resolver: AaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AaResolver],
    }).compile();

    resolver = module.get<AaResolver>(AaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
