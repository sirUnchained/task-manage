import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import projectStatus from '../enums/status.enum';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: projectStatus, default: projectStatus.enable })
  status: projectStatus;
}
