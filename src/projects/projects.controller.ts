import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  Res,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import projectStatus from './enums/status.enum';
import { Response } from 'express';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll(
    @Res() res: Response,
    @Body('status') status: projectStatus,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const result = this.projectsService.findAll(+page, +limit, status);
    return res.status(200).json(result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.projectsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Body() updateProjectDto: UpdateProjectDto,
    @Param('id') id: string,
  ) {
    return await this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.projectsService.remove(+id);
  }
}
