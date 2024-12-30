import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import projectStatus from '../enums/status.enum';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsEnum(projectStatus)
  status: projectStatus;
}
