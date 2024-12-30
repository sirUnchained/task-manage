import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './projects/entities/project.entity';
import { TasksModule } from './tasks/tasks.module';
import { TasksEntity } from './tasks/entities/task.entity';

@Module({
  imports: [
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '11111111',
      database: 'task_manage',
      entities: [ProjectsEntity, TasksEntity],
      synchronize: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
