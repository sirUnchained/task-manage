import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import projectStatus from '../enums/status.enum';

export class UpdateProjectDto {
  @IsNotEmpty({ message: 'نام پروژه الزامی است.' })
  @IsString()
  @Length(0, 30, { message: 'نام پروژه باین بین ۰ تا ۳۰ کاراکتر باشد.' })
  title: string;

  @IsNotEmpty({ message: 'وضعیت پروژه الزامی است.' })
  @IsEnum(projectStatus)
  status: projectStatus;
}
