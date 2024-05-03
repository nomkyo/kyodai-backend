import { IsNotEmpty } from 'class-validator';

export class GetScheduleInput {
  @IsNotEmpty()
  sport: string;
}
