import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todos.entity';

export interface Todo {
  id?: string;
  title: string;
  description: string;
}

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
  ) {}

  async createTodo(todo: Todo): Promise<string> {
    const newTodo = await this.todosRepository.create({
      title: todo.title,
      description: todo.description,
    });
    await this.todosRepository.save(newTodo);
    return 'created';
  }

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todosRepository.find();
    return todos;
  }

  async getSingleTodo(id): Promise<Todo> {
    const todo = await this.todosRepository.findOne({ where: { id } });
    return todo;
  }
}
