import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/project.entity';
import { TasksEntity } from 'src/tasks/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectsEntity, TasksEntity])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
