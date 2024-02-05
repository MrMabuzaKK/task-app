import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly TaskRespository: Repository<Task>,
  ) {}

  async create(dto: CreateTaskDto) {
    const Task = this.TaskRespository.create(dto);
    return await this.TaskRespository.save(Task);
  }

  findAll() {
    return this.TaskRespository.find();
  }

  findOne(id: number) {
    return this.TaskRespository.find({ where: { id: 1 }});
  }

 async update(id: number, dto: UpdateTaskDto) {
  const Task = await this.TaskRespository.findOne({ where: { id }});
  // Check that record exists - Validations (I have excluded them)
  Object.assign(Task, dto);
  return await this.TaskRespository.save(Task);
  }

  async remove(id: number) {
    const Task = await this.TaskRespository.findOne({ where: { id }});
    // Check that record exists - Validations (I have excluded them)
    return await this.TaskRespository.remove(Task);
    }
  }
