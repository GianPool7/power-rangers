import { Test, TestingModule } from '@nestjs/testing';
import { VillainsController } from './villains.controller';
import { VillainsService } from './villains.service';

describe('VillainsController', () => {
  let controller: VillainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VillainsController],
      providers: [VillainsService],
    }).compile();

    controller = module.get<VillainsController>(VillainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
