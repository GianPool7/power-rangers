import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Ranger extends Document {
    @Prop({
        unique:true,
        index:true
    })
    name:string;
    @Prop({
        unique:true,
        index:true
    })
    edad:number;
    @Prop({
        unique:true,
        index:true
    })
    color:string;
}

export const RangerSchema=SchemaFactory.createForClass(Ranger)