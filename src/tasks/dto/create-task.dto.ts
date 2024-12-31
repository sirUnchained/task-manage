import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import taskStatus from '../enums/status.enum';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'عنوان الزامی است.' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'توضیحات الزامی است.' })
  @IsString()
  @Length(0, 250, { message: 'طول توضیحات باید بیش از ۰ و کمتر از 250 باشد.' })
  description: string;

  @IsEnum(taskStatus)
  @IsOptional()
  status: taskStatus;

  @IsNotEmpty()
  @IsNumber({ allowNaN: false })
  @Min(0)
  project: number;
}
