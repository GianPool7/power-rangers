import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RangersService } from './rangers.service';
import { CreateRangerDto } from './dto/create-ranger.dto';
import { UpdateRangerDto } from './dto/update-ranger.dto';

@Controller('rangers')
export class RangersController {
  constructor(private readonly rangersService: RangersService) {}

  @Post()
  create(@Body() createRangerDto: CreateRangerDto) {
    return this.rangersService.create(createRangerDto);
  }

  @Get()
  findAll() {
    return this.rangersService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.rangersService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRangerDto: UpdateRangerDto) {
    return this.rangersService.update(+id, updateRangerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rangersService.remove(+id);
  }
}
