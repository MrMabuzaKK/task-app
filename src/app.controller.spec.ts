import { Test, TestingModule } from '@nestjs/testing'; // Importing Test and TestingModule from '@nestjs/testing' package
import { AppController } from './app.controller'; // Importing the AppController class from the app.controller file
import { AppService } from './app.service'; // Importing the AppService class from the app.service file

describe('AppController', () => { // Describe block for the AppController test suite
  let appController: AppController; // Variable to hold the instance of AppController

  beforeEach(async () => { // beforeEach block to run before each test case
    const app: TestingModule = await Test.createTestingModule({ // Creating a TestingModule for testing
      controllers: [AppController], // Providing the AppController as the controller to test
      providers: [AppService], // Providing the AppService as the dependency to inject
    }).compile(); // Compiling the TestingModule

    appController = app.get<AppController>(AppController); // Getting an instance of AppController from the compiled module
  });

  describe('root', () => { // Describe block for the 'root' test case
    it('should return "Hello World!"', () => { // Test case to verify the behavior of the getHello method
      expect(appController.getHello()).toBe('Hello World!'); // Expecting the result of getHello method to be 'Hello World!'
    });
  });
});
