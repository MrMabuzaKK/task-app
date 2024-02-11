import { Module } from '@nestjs/common'; // Importing Module decorator from '@nestjs/common'
import { TasksService } from './tasks.service'; // Importing TasksService from './tasks.service'
import { TasksController } from './tasks.controller'; // Importing TasksController from './tasks.controller'
import { TypeOrmModule } from '@nestjs/typeorm'; // Importing TypeOrmModule from '@nestjs/typeorm'
import { Task } from './entities/task.entity'; // Importing Task entity from './entities/task.entity'

@Module({ // Module decorator to define a NestJS module
  imports: [TypeOrmModule.forFeature([Task])], // Importing TypeOrmModule for feature, providing Task entity to make it available within the module
  controllers: [TasksController], // Declaring TasksController as a controller within the module
  providers: [TasksService], // Declaring TasksService as a provider within the module
})
export class TasksModule {} // Exporting TasksModule class
