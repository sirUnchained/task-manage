import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import taskStatus from '../enums/status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: taskStatus })
  status: taskStatus;

  @Column()
  project_id: number;
}
