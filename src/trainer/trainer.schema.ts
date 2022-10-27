import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";
import { ITrainer } from "src/interfaces";

export type TrainerDocument = ITrainer & mongoose.Document;

@Schema({
    id: true,
    toJSON: {
        getters: true,
    }
})
export class Trainer {
    @ApiProperty({ example: 'Антон', description: 'Имя тренера' })
    @Prop({ type: String, required: true })
    name: string;

    @ApiProperty({ example: 'Краснов', description: 'Фамилия тренера' })
    @Prop({ type: String, required: true })
    surname: string;

    @ApiProperty({ example: 33, description: 'Возраст тренера' })
    @Prop({ type: Number, required: true })
    age: number;
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);
