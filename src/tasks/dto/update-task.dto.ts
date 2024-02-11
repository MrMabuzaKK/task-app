import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

// UpdateTaskDto is a mapped type that extends PartialType of CreateTaskDto.
// PartialType is a utility function provided by NestJS to create a new type that makes all properties of the original type optional.

// UpdateTaskDto inherits the properties from CreateTaskDto and makes them optional, allowing clients to update only specific properties of a task instead of providing the entire object.

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
