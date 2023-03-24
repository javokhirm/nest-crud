import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { TodoEntity } from './todos.entity';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TodosService],
})
export class TodosModule {}
