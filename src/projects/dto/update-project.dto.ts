import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import projectStatus from '../enums/status.enum';

export class UpdateProjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(0, 30)
  title: string;

  @IsNotEmpty()
  @IsEnum(projectStatus)
  status: projectStatus;
}
