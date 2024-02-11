import { Injectable } from '@nestjs/common'; // Importing Injectable decorator from '@nestjs/common'
import { UpdateTaskDto } from './dto/update-task.dto'; // Importing UpdateTaskDto from the update-task.dto file
import { InjectRepository } from '@nestjs/typeorm'; // Importing InjectRepository decorator from '@nestjs/typeorm'
import { Task } from './entities/task.entity'; // Importing Task entity from the task.entity file
import { Repository } from 'typeorm'; // Importing Repository from 'typeorm'
import { CreateTaskDto } from './dto/create-task.dto'; // Importing CreateTaskDto from the create-task.dto file

@Injectable() // Injectable decorator to declare the class as a service
export class TasksService { // TasksService class declaration
  constructor(
    @InjectRepository(Task) // Injecting the Task entity repository into the service
    private readonly TaskRespository: Repository<Task>, // Declaring TaskRepository as a private member
  ) {}

  async create(dto: CreateTaskDto) { // Method to create a new task
    const Task = this.TaskRespository.create(dto); // Creating a new task entity instance
    return await this.TaskRespository.save(Task); // Saving the created task entity in the database
  }

  findAll() { // Method to find all tasks
    return this.TaskRespository.find(); // Returning all tasks from the database
  }

  findOne(id: number) { // Method to find a single task by ID
    return this.TaskRespository.find({ where: { id: 1 }}); // Finding a task by ID and returning it
  }

  async update(id: number, dto: UpdateTaskDto) { // Method to update a task by ID
    const Task = await this.TaskRespository.findOne({ where: { id }}); // Finding the task by ID
    Object.assign(Task, dto); // Updating the task entity with new data from the DTO
    return await this.TaskRespository.save(Task); // Saving the updated task entity in the database
  }

  async remove(id: number) { // Method to remove a task by ID
    const Task = await this.TaskRespository.findOne({ where: { id }}); // Finding the task by ID
    return await this.TaskRespository.remove(Task); // Removing the task entity from the database
  }
}
