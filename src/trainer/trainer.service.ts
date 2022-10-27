import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ITrainer, ITrainerDto } from "src/interfaces";
import { Trainer, TrainerDocument } from "./trainer.schema";

@Injectable()
export class TrainerService {
    constructor(
        @InjectModel('Trainer') private readonly trainerModel: Model<TrainerDocument>
    ) { }

    async all(): Promise<ITrainer[]> {
        return this.trainerModel.find();
    }

    async get(id: string): Promise<ITrainer> {
        const workout = await this.trainerModel.findById(id);
        if (workout) {
            return workout
        }
        throw new NotFoundException({ response: 'Trainer not found!' })
    }

    async create(dto: ITrainerDto): Promise<ITrainer> {
        return new this.trainerModel(dto).save();
    }

    async update(id: string, dto: ITrainerDto): Promise<ITrainer> {
        const workout = await this.trainerModel.findByIdAndUpdate(id, dto);
        if (workout) {
            return this.trainerModel.findById(id);
        }
        throw new NotFoundException({ response: 'Trainer not found!' })

    }

    async delete(id: string): Promise<void> {
        return this.trainerModel.findByIdAndDelete(id);
    }
}