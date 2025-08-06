import { PartialType } from '@nestjs/mapped-types';
import { CreateVillainDto } from './create-villain.dto';

export class UpdateVillainDto extends PartialType(CreateVillainDto) {}
