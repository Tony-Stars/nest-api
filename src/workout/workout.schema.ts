
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { IWorkout } from 'src/interfaces';

const ObjectId = mongoose.Schema.Types.ObjectId;

export type WorkoutDocument = IWorkout & mongoose.Document;

@Schema({
    id: true,
    toJSON: {
        getters: true,
    }
})
export class Workout {
    @ApiProperty({ example: 'Monday', description: 'День недели' })
    @Prop({ type: String, required: true })
    day: string;

    @ApiProperty({ example: true, description: 'Статус завершенности тренировки' })
    @Prop({ type: Boolean, required: true })
    completed: boolean;

    @ApiProperty({ example: '6358143ede22ae255c1ebbe3', description: 'id тренера' })
    @Prop({ type: ObjectId, required: true, ref: 'Trainer' })
    trainer: string
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
