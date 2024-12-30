import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import projectStatus from '../enums/status.enum';
import { TasksEntity } from 'src/tasks/entities/task.entity';

@Entity()
export class ProjectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: projectStatus, default: projectStatus.enable })
  status: projectStatus;

  @OneToMany(() => TasksEntity, (task) => task.project)
  tasks: TasksEntity[];
}
