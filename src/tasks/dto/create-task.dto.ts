import { IsNotEmpty, Length } from 'class-validator';
import taskStatus from '../enums/status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @Length(0, 250)
  description: string;

  status: taskStatus;
}
