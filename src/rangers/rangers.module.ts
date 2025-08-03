import { Module } from '@nestjs/common';
import { RangersService } from './rangers.service';
import { RangersController } from './rangers.controller';
import { Ranger,RangerSchema } from './entities/ranger.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [RangersController],
  providers: [RangersService],
  imports:[
    MongooseModule.forFeature([
      {
        name:Ranger.name,
        schema:RangerSchema
      }
    ])
  ]
})
export class RangersModule {}
