import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrainerController } from "./trainer.controller";
import { TrainerSchema } from "./trainer.schema";
import { TrainerService } from "./trainer.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Trainer', schema: TrainerSchema }]),
    ],
    controllers: [
        TrainerController
    ],
    providers: [
        TrainerService
    ],
})
export class TrainerModule { }
