import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VillainsService } from './villains.service';
import { CreateVillainDto } from './dto/create-villain.dto';
import { UpdateVillainDto } from './dto/update-villain.dto';

@Controller('villains')
export class VillainsController {
  constructor(private readonly villainsService: VillainsService) {}

  @Post()
  create(@Body() createVillainDto: CreateVillainDto) {
    return this.villainsService.create(createVillainDto);
  }

  @Get()
  findAll() {
    return this.villainsService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.villainsService.findOne(term);
  }

  @Patch(':term')
  update(
    @Param('term') term: string, 
    @Body() updateVillainDto: UpdateVillainDto) 
  {
    return this.villainsService.update(term, updateVillainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villainsService.remove(id);
  }
}
