import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VillainsService } from './villains.service';
import { VillainsController } from './villains.controller';
import { Villain,VillainSchema } from './entities/villain.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Villain.name,schema:VillainSchema}
    ])
  ],
  controllers: [VillainsController],
  providers: [VillainsService],
})
export class VillainsModule {}
