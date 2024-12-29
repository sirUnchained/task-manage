import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import taskStatus from '../enums/status.enum';
import { Projects } from 'src/projects/entities/project.entity';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: taskStatus })
  status: taskStatus;

  @ManyToOne(() => Projects, (project) => project.tasks)
  project: Projects;
}
