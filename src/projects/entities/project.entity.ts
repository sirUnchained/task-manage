import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import projectStatus from '../enums/status.enum';
import { Tasks } from 'src/tasks/entities/task.entity';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: projectStatus, default: projectStatus.enable })
  status: projectStatus;

  @OneToMany(() => Tasks, (task) => task.project)
  tasks: Tasks[];
}
