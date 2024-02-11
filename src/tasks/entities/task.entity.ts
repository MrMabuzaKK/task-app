import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"; // Importing necessary decorators from TypeORM

// Enum representing the possible status of a task
export enum TaskStatus {
  Done = 'done',
  InProgress = 'in_progress',
  Pending = 'pending',
}

@Entity({ name: 'tasks' }) // Decorator to mark the class as an entity and specify the entity name
export class Task {
  @PrimaryGeneratedColumn({ type: 'bigint' }) // Decorator for a primary generated column of type bigint
  id: number; // Property to hold the ID of the task

  @Column({ type: 'varchar', length: 255 }) // Decorator for a varchar column with maximum length of 255 characters
  title: string; // Property to hold the title of the task

  @Column({ type: 'text', nullable: true }) // Decorator for a nullable text column
  description: string; // Property to hold the description of the task

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.Pending }) // Decorator for an enum column with default value of 'pending'
  status: TaskStatus; // Property to hold the status of the task

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Decorator for a create date column with default value of current timestamp
  createdAt: Date; // Property to hold the creation date of the task

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }) // Decorator for an update date column with default and update value of current timestamp
  updatedAt: Date; // Property to hold the last update date of the task
}
