import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [HttpModule],
})
export class ScheduleModule {}
