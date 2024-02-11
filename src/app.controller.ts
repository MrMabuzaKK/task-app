import { Controller, Get } from '@nestjs/common'; // Importing Controller and Get decorators from the @nestjs/common package
import { AppService } from './app.service'; // Importing the AppService class from the app.service file

@Controller() // Decorator to define a controller class
export class AppController {
  constructor(private readonly appService: AppService) {} // Constructor to inject the AppService instance

  @Get() // Decorator to define a GET route handler
  getHello(): string { // Handler method for the GET route
    return this.appService.getHello(); // Calling the getHello method of the injected AppService instance
  }
}
