import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { GetScheduleInput } from './dto/get-schedule.input';
import { League } from './models/league.model';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  async getScheduleForSport(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    )
    getScheduleInput: GetScheduleInput,
  ) {
    return await this.scheduleService.getScheduleForSport(
      getScheduleInput.sport,
    );
  }

  @Get('leagues')
  async getLeagues(): Promise<League[]> {
    return await this.scheduleService.getLeagues();
  }
}
