import { Module } from '@nestjs/common';
import { RangersModule } from './rangers/rangers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/nest-rangers'),
    RangersModule
  ],
})
export class AppModule {}
