import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import projectStatus from './enums/status.enum';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll(
    @Body('status') status: projectStatus,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.projectsService.findAll(+page, +limit, status);
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
