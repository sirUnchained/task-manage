import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from './projects/entities/project.entity';
import { TasksModule } from './tasks/tasks.module';

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
      entities: [Projects],
      synchronize: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
