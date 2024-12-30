import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/project.entity';
import { Repository } from 'typeorm';
import projectStatus from './enums/status.enum';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsEntity)
    private readonly projectRepo: Repository<ProjectsEntity>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    try {
      const newProj = this.projectRepo.create(createProjectDto);
      return this.projectRepo.save(newProj);
    } catch (error) {
      throw new BadRequestException('error for creating project.');
    }
  }

  async findAll(page: number, limit: number, status?: projectStatus) {
    try {
      const query = this.projectRepo.createQueryBuilder('project');
      if (
        (status && status === projectStatus.enable) ||
        status === projectStatus.disable
      ) {
        query.where('status = :status', { status: status });
      }

      query.skip((page - 1) * limit || 0).take(limit || 3);

      return await query.getMany();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findOne(id: number) {
    return this.projectRepo.findOne({ where: { id } });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      if (!id) {
        throw new BadRequestException('id is not valid.');
      }
      const project = await this.projectRepo.findOne({ where: { id } });
      if (!project) {
        throw new BadRequestException('project not found.');
      }

      return await this.projectRepo.update(
        { id },
        { status: updateProjectDto.status, title: updateProjectDto.title },
      );
    } catch (error) {
      throw new InternalServerErrorException('error ?');
    }
  }

  async remove(id: number) {
    try {
      if (!id) {
        throw new BadRequestException('id is not valid.');
      }
      const project = await this.projectRepo.findOne({ where: { id } });
      if (!project) {
        throw new BadRequestException('project not found.');
      }

      const result = await this.projectRepo.delete({ id });
      if (!result.affected) {
        throw new NotFoundException(id + 'not found.');
      }

      return result;
    } catch (error) {
      throw new InternalServerErrorException('err');
    }
  }
}
