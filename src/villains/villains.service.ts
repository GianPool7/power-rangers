import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVillainDto } from './dto/create-villain.dto';
import { UpdateVillainDto } from './dto/update-villain.dto';
import { VillainsModule } from './villains.module';
import { Villain } from './entities/villain.entity';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class VillainsService {

  constructor(
    @InjectModel(Villain.name)
    private readonly villainModel:Model<Villain>
  ){}

  async create(createVillainDto: CreateVillainDto) {
    // return 'This action adds a new villain';
    try {
      const villain=await this.villainModel.create(createVillainDto)
      return villain
    } catch (error) {
      console.log("error");
    }

  }

  async findAll() {
    // return `This action returns all villains`;
    try {
      const villains=await this.villainModel.find().exec()
      return villains
    } catch (error) {
      
    }
  }

  async findOne(term: string) {

    let villain:Villain | null=null;

    // por ID 
    if (!isNaN(+term)) {
      villain=await this.villainModel.findOne({nombre:term})
    }

    // mongoID
    if (isValidObjectId(term)) {
      villain=await this.villainModel.findById(term)
    }

    // return `This action returns a #${id} villain`;
    const villains=await this.villainModel.findOne({nombre:term})

    if (!villains) {
      throw new NotFoundException(`Villain with name "${term}" not found`);
    }

    return villains

  }

  async update(term: string, updateVillainDto: UpdateVillainDto) {
    // return `This action updates a #${id} villain`;
    const villains=await this.findOne(term);

    if (updateVillainDto.nombre) {
      updateVillainDto.nombre=updateVillainDto.nombre
    }
    // console.log(villains);
    try {
      await villains.updateOne(updateVillainDto)
      return {...villains.toJSON(),...updateVillainDto}
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    // return `This action removes a #${id} villain`;
    const {deletedCount,acknowledged}=await this.villainModel.deleteOne({_id:id})
    if (deletedCount===0) {
      throw new BadRequestException(`Villain with id "${id} not found"`)
    }
    return;
  }
}
