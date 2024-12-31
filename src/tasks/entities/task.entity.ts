import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import taskStatus from '../enums/status.enum';
import { ProjectsEntity } from 'src/projects/entities/project.entity';

@Entity()
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: taskStatus, default: taskStatus.doing })
  status: taskStatus;

  @ManyToOne(() => ProjectsEntity, (project) => project.tasks)
  project: ProjectsEntity;
}
