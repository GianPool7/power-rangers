import { Module } from '@nestjs/common';
import { RangersModule } from './rangers/rangers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VillainsModule } from './villains/villains.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/nest-rangers'),
    RangersModule,
    VillainsModule
  ],
})
export class AppModule {}
