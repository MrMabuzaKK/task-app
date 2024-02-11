import { Test, TestingModule } from '@nestjs/testing'; // Importing necessary modules for testing from '@nestjs/testing'
import { TasksController } from './tasks.controller'; // Importing TasksController from './tasks.controller'
import { TasksService } from './tasks.service'; // Importing TasksService from './tasks.service'

describe('TasksController', () => { // Test suite for TasksController
  let controller: TasksController; // Declare variable to hold TasksController instance

  beforeEach(async () => { // Before each test case, setup the testing module
    const module: TestingModule = await Test.createTestingModule({ // Create a testing module
      controllers: [TasksController], // Provide TasksController as a controller to test
      providers: [TasksService], // Provide TasksService as a provider for dependency injection
    }).compile(); // Compile the testing module

    controller = module.get<TasksController>(TasksController); // Get an instance of TasksController from the testing module
  });

  it('should be defined', () => { // Test case to check if TasksController is defined
    expect(controller).toBeDefined(); // Assert that the controller instance is defined
  });
});
