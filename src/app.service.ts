import { Injectable } from '@nestjs/common';

@Injectable() // Marks the class as injectable, allowing Nest.js to manage its instantiation
export class AppService {
  
  // Defines a method to retrieve a greeting message
  getHello(): string {
    return 'Hello World!'; // Returns a simple greeting message
  }
}
