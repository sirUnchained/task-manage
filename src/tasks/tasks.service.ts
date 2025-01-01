import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { ProjectsEntity } from 'src/projects/entities/project.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly taskRepo: Repository<TasksEntity>,
    @InjectRepository(ProjectsEntity)
    private readonly projRepo: Repository<ProjectsEntity>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const { project, ...taskData } = createTaskDto;
      const checkProject = await this.projRepo.findOne({
        where: { id: project },
      });
      if (!checkProject) {
        return new NotFoundException('project not found.');
      }

      const newTask = this.taskRepo.create({
        ...taskData,
        project: checkProject,
      });
      return await this.taskRepo.save(newTask);
    } catch (error) {
      throw new BadRequestException('error for creating task.');
    }
  }

  async findAll() {
    return await this.taskRepo.find({
      relations: ['project'],
      /*       
      skip: 1,
      take: 1, 
*/
    });
  }

  async findOne(id: number) {
    if (id) {
      return await this.taskRepo.findOne({
        where: { id },
        relations: ['project'],
      });
    } else {
      throw new BadRequestException('id is not valid.');
    }
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    console.log(updateTaskDto);
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return this.taskRepo.delete({ id });
  }
}
