import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './entities/task.entity';
import { ProjectsEntity } from 'src/projects/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity, ProjectsEntity])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
