import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TrainerModule } from "./trainer/trainer.module";
import { WorkoutModule } from "./workout/workout.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        MongooseModule.forRoot(process.env.MONGO_URI),
        TrainerModule,
        WorkoutModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
