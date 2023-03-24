import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo, TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  async getTodos() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  async getSingleTodo(@Param() todoId: { id: string }) {
    return this.todosService.getSingleTodo(todoId.id);
  }

  @Post()
  async createTodo(@Body() todo: Todo) {
    return this.todosService.createTodo(todo);
  }
}
