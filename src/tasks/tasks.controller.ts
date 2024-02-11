import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'; // Importing necessary decorators and modules from '@nestjs/common'
import { TasksService } from './tasks.service'; // Importing TasksService from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto'; // Importing CreateTaskDto from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'; // Importing UpdateTaskDto from './dto/update-task.dto'

@Controller('tasks') // Controller decorator to define the base route for this controller
export class TasksController { // Defining TasksController class
  constructor(private readonly tasksService: TasksService) {} // Constructor to inject TasksService

  @Post() // Decorator for POST method, defining the route '/tasks'
  create(@Body() dto: CreateTaskDto) { // Method to handle POST requests to create tasks
    return this.tasksService.create(dto); // Calling create method of TasksService and returning the result
  }

  @Get() // Decorator for GET method, defining the route '/tasks'
  findAll() { // Method to handle GET requests to retrieve all tasks
    return this.tasksService.findAll(); // Calling findAll method of TasksService and returning the result
  }

  @Get(':id') // Decorator for GET method, defining the route '/tasks/:id'
  findOne(@Param('id') id: string) { // Method to handle GET requests to retrieve a single task by ID
    return this.tasksService.findOne(+id); // Calling findOne method of TasksService with parsed ID and returning the result
  }

  @Patch(':id') // Decorator for PATCH method, defining the route '/tasks/:id'
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) { // Method to handle PATCH requests to update a task
    return this.tasksService.update(+id, dto); // Calling update method of TasksService with parsed ID and DTO, returning the result
  }

  @Delete(':id') // Decorator for DELETE method, defining the route '/tasks/:id'
  remove(@Param('id') id: string) { // Method to handle DELETE requests to remove a task
    return this.tasksService.remove(+id); // Calling remove method of TasksService with parsed ID and returning the result
  }
}
