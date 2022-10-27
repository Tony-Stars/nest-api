import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IWorkout, IWorkoutDto } from "src/interfaces";
import { WorkoutDocument } from "./workout.schema";

@Injectable()
export class WorkoutService {
    constructor(
        @InjectModel('Workout') private readonly workoutModel: Model<WorkoutDocument>
    ) { }

    async all(): Promise<IWorkout[]> {
        return this.workoutModel.find();
    }

    async get(id: string): Promise<IWorkout> {
        const workout = await this.workoutModel.findById(id);
        if (workout) {
            return workout
        }
        throw new NotFoundException({ response: 'Workout not found!' })
    }

    async create(dto: IWorkoutDto): Promise<IWorkout> {
        return new this.workoutModel(dto).save();
    }

    async update(id: string, dto: IWorkoutDto): Promise<IWorkout> {
        const workout = await this.workoutModel.findByIdAndUpdate(id, dto);
        if (workout) {
            return this.workoutModel.findById(id);
        }
        throw new NotFoundException({ response: 'Workout not found!' })

    }

    async delete(id: string): Promise<void> {
        return this.workoutModel.findByIdAndDelete(id);
    }
}
