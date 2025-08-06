import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Villain extends Document {
    @Prop({
        unique:true,
        index:true
    })
    nombre:string

    @Prop({        
        unique:true,
        index:true
    })
    poder:number

    @Prop({
        unique:true,
        index:true
    })
    especie:string
}

export const VillainSchema=SchemaFactory.createForClass(Villain)
