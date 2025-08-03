import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRangerDto } from './dto/create-ranger.dto';
import { UpdateRangerDto } from './dto/update-ranger.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ranger } from './entities/ranger.entity';
import { Model } from 'mongoose';

@Injectable()
export class RangersService {

  constructor(
    @InjectModel(Ranger.name)
    private readonly rangerModel: Model<Ranger>
  ){}


  async create(createRangerDto: CreateRangerDto) {
    createRangerDto.name=createRangerDto.name.toLocaleLowerCase();

    try {
      const ranger=await this.rangerModel.create(createRangerDto)
      return ranger;
    } catch (error) {
      console.log("un error : ",error);
    }

  }

  async findAll() {
    // return `This action returns all rangers`;
    try {
      const rangers=await this.rangerModel.find().exec()
      return rangers
    } catch (error) {
      console.log("jejejejje");
    }
  }

  async findOne(term: string) {

    let ranger:Ranger | null=null;

    if (!isNaN(+term)) {
      ranger=await this.rangerModel.findOne({edad:term})
    }

    if (!ranger) {
      ranger=await this.rangerModel.findOne({name:term.toLocaleLowerCase().trim()})
    }

    if (!ranger) {
      ranger=await this.rangerModel.findOne({color:term.trim()})
    }

    if (!ranger) {
      throw new NotFoundException(`Ranger with id, name or color and edad ${term}`)
    }

    return ranger;
    // return `This action returns a #${id} ranger`;
  }

  update(id: number, updateRangerDto: UpdateRangerDto) {
    return `This action updates a #${id} ranger`;
  }

  remove(id: number) {
    return `This action removes a #${id} ranger`;
  }
}
