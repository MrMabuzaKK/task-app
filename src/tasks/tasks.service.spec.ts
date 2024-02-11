import { Test, TestingModule } from '@nestjs/testing'; // Importing Test and TestingModule from '@nestjs/testing'
import { TasksService } from './tasks.service'; // Importing TasksService from './tasks.service'

describe('TasksService', () => { // Describe block to group tests related to the TasksService
  let service: TasksService; // Declaring a variable to hold an instance of TasksService

  beforeEach(async () => { // BeforeEach block to run code before each test
    const module: TestingModule = await Test.createTestingModule({ // Creating a testing module
      providers: [TasksService], // Providing TasksService as a dependency to the module
    }).compile(); // Compiling the testing module

    service = module.get<TasksService>(TasksService); // Getting an instance of TasksService from the testing module
  });

  it('should be defined', () => { // Test case to check if TasksService is defined
    expect(service).toBeDefined(); // Expecting TasksService to be defined
  });
});
