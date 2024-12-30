import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import projectStatus from '../enums/status.enum';

export class CreateProjectDto {
  @IsNotEmpty({ message: 'نام پروژه الزامی است.' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'وضعیت پروژه الزامی است.' })
  @IsEnum(projectStatus)
  status: projectStatus;
}
