import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
      this.handleExceptions(error)
    }

  }

  async findAll() {
    // return `This action returns all rangers`;
    try {
      const rangers=await this.rangerModel.find().exec()
      return rangers
    } catch (error) {
      this.handleExceptions(error)
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

  async update(term: string, updateRangerDto: UpdateRangerDto) {
    // return `This action updates a #${id} ranger`;
    const ranger=await this.findOne(term);
    if (updateRangerDto.color) {
      updateRangerDto.color=updateRangerDto.color.toLocaleLowerCase();
    }

    try {
      await ranger.updateOne(updateRangerDto)
      return {...ranger.toJSON(),...updateRangerDto}
    } catch (error) {
      this.handleExceptions(error)
    }

  }

  async remove(id: string) {
    // return `This action removes a #${id} ranger`;
    const {deletedCount,acknowledged}=await this.rangerModel.deleteOne({_id:id})
    if (deletedCount===0) {
      throw new BadRequestException(`Ranger with id "${id} not found"`)
    }
    return;
  }

  private handleExceptions(error:any){
    if (error.code===11000) {
      throw new BadRequestException(`Ranger with id "${JSON.stringify} not found"`)
    }
    console.log(error);
    throw new InternalServerErrorException(`can't create ranger - check server logs`)
  }

}
