import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // Importing ConfigModule.forRoot() to load environment variables from .env file
    ConfigModule.forRoot(),

    // Importing TypeOrmModule.forRootAsync() to configure the TypeORM connection asynchronously
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importing ConfigModule to access environment variables
      useFactory: (configService: ConfigService) => ({ // Factory function to create TypeORM connection options
        type: 'mysql', // Database type (MySQL in this case)
        host: configService.get('DB_HOST'), // Database host retrieved from environment variables
        port: +configService.get('DB_PORT'), // Database port retrieved from environment variables
        username: configService.get('DB_USERNAME'), // Database username retrieved from environment variables
        password: configService.get('DB_PASSWORD'), // Database password retrieved from environment variables
        database: configService.get('DB_NAME'), // Database name retrieved from environment variables
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entities to be loaded by TypeORM
        synchronize: true, // Automatically synchronize the database schema with the entities (not recommended for production)
      }),
      inject: [ConfigService], // Injecting ConfigService to access environment variables
    }),

    // Importing TasksModule to register the tasks-related controllers, providers, and services
    TasksModule,
  ],
  controllers: [AppController], // Defining the controllers belonging to the AppModule
  providers: [AppService], // Defining the providers (services) belonging to the AppModule
})
export class AppModule {} // Exporting the AppModule class
