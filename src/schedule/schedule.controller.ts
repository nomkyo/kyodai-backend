import {
  Controller,
  Get,
  Logger,
  Query,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { GetScheduleInput } from './dto/get-schedule.input';
import { League } from './models/league.model';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}
  private readonly logger = new Logger(ScheduleController.name);

  @Get('schedule')
  async getScheduleForSport(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    )
    getScheduleInput: GetScheduleInput,
  ) {
    this.logger.log("Get Schedule")
    return await this.scheduleService.getScheduleForSport(
      getScheduleInput.league,
    );
  }

  @Get('leagues')
  async getLeagues(): Promise<League[]> {
    this.logger.log("Get Leagues")

    return await this.scheduleService.getLeagues();
  }
}
