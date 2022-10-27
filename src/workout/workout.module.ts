import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { WorkoutController } from "./workout.controller";
import { WorkoutSchema } from "./workout.schema";
import { WorkoutService } from "./workout.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Workout', schema: WorkoutSchema }]),
    ],
    controllers: [WorkoutController],
    providers: [WorkoutService],
})
export class WorkoutModule { }
