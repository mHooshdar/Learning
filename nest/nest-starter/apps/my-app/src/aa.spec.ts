import { Test, TestingModule } from '@nestjs/testing';
import { Aa } from './aa';

describe('Aa', () => {
  let provider: Aa;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Aa],
    }).compile();

    provider = module.get<Aa>(Aa);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
