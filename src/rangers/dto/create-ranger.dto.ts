import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";
export class CreateRangerDto {

    @IsString()
    @MinLength(1)
    name:string;

    @IsInt()
    @Min(1)
    @IsPositive()
    edad:number

    @IsString()
    @MinLength(1)
    color:string;
}
