import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import statusEnum from '../enums/status.enum';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: statusEnum, default: statusEnum.enable })
  status: statusEnum;
}
