import { IsString,Min,min,MinLength } from "class-validator";

export class CreateVillainDto {
    @MinLength(1)
    @IsString()
    nombre:string

    @Min(1)
    poder:number

    @IsString()
    @MinLength(1)
    especie:string
    
}
