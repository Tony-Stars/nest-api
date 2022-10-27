import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IWorkout, IWorkoutDto } from "src/interfaces";
import { Workout } from "./workout.schema";
import { WorkoutService } from "./workout.service";

@ApiTags('Тренировки')
@Controller("workout")
export class WorkoutController {
    constructor(private readonly workoutService: WorkoutService) { }

    @ApiOperation({ summary: 'Получение всех тренировок' })
    @ApiResponse({ status: 200, type: [Workout] })
    @Get('/')
    async all(): Promise<IWorkout[]> {
        const workouts = await this.workoutService.all();
        return workouts;
    }

    @ApiOperation({ summary: 'Получение тренировки по идентификатору' })
    @ApiResponse({ status: 200, type: Workout })
    @Get('/:id')
    async get(@Param('id') id: string): Promise<IWorkout> {
        const workout = await this.workoutService.get(id);
        return workout
    }

    @ApiOperation({ summary: 'Добавление тренировки' })
    @ApiResponse({ status: 201, type: Workout })
    @Post('/')
    async create(@Body() dto: IWorkoutDto): Promise<IWorkout> {
        const workout = await this.workoutService.create(dto);
        console.log(workout);
        return workout;
    }

    @ApiOperation({ summary: 'Обновление тренировки по идентификатору' })
    @ApiResponse({ status: 200, type: Workout })
    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() dto: IWorkoutDto,
    ): Promise<IWorkout> {
        const workout = await this.workoutService.update(id, dto);
        return workout
    }

    @ApiOperation({ summary: 'Удаление тренировки по идентификатору' })
    @ApiResponse({ status: 200 })
    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.workoutService.delete(id)
    }
}
