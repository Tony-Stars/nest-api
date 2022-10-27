import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ITrainerDto } from 'src/interfaces';
import { Trainer } from './trainer.schema';
import { TrainerService } from './trainer.service';

@ApiTags('Тренеры')
@Controller('trainer')
export class TrainerController {
    constructor(private readonly trainerService: TrainerService) { }

    @ApiOperation({ summary: 'Получение всех тренеров' })
    @ApiResponse({ status: 200, type: [Trainer] })
    @Get('/')
    async all(): Promise<Trainer[]> {
        const trainers = await this.trainerService.all();
        return trainers;
    }

    @ApiOperation({ summary: 'Получение тренера по идентификатору' })
    @ApiResponse({ status: 200, type: Trainer })
    @Get('/:id')
    async get(@Param('id') id: string): Promise<Trainer> {
        const trainer = await this.trainerService.get(id);
        return trainer
    }

    @ApiOperation({ summary: 'Добавление тренера' })
    @ApiResponse({ status: 201, type: Trainer })
    @Post('/')
    async create(@Body() dto: ITrainerDto): Promise<Trainer> {
        const trainer = await this.trainerService.create(dto);
        return trainer;
    }

    @ApiOperation({ summary: 'Обновление тренера по идентификатору' })
    @ApiResponse({ status: 200, type: Trainer })
    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() dto: ITrainerDto,
    ): Promise<Trainer> {
        const trainer = await this.trainerService.update(id, dto);
        return trainer
    }

    @ApiOperation({ summary: 'Удаление тренера по идентификатору' })
    @ApiResponse({ status: 200 })
    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.trainerService.delete(id)
    }
}
