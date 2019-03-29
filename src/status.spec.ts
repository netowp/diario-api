import { Test, TestingModule } from '@nestjs/testing';
import { Status } from './status.providers';

describe('Status', () => {
  let provider: Status;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Status],
    }).compile();

    provider = module.get<Status>(Status);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
