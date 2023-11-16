import { Component } from '@angular/core';
import { Todo } from 'src/app/domain/models/todo/todo.model';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoDeleteUseCase } from 'src/app/domain/use-cases/todo/todo-delete/todo-delete-use-case';
import { TodoGetAllUseCase } from 'src/app/domain/use-cases/todo/todo-get-all/todo-get-all-use-case';
import { TodoSaveUseCase } from 'src/app/domain/use-cases/todo/todo-save/todo-save-use-case';
import { TodoUpdateUseCase } from 'src/app/domain/use-cases/todo/todo-update/todo-update-use-case';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  public todos: Todo[] = [];
  public todoForm!: FormGroup;
  public description = '';

  constructor(
    private readonly todoGetAllUseCase: TodoGetAllUseCase,
    private readonly todoDeleteUseCase: TodoDeleteUseCase,
    private readonly todoSaveUseCase: TodoSaveUseCase,
    private readonly todoUpdateUseCase: TodoUpdateUseCase,
  ){
    this.createTodoForm();
    this.getTodos();
  }

  delete(id: string): void{
    this.todoDeleteUseCase.handle(id);
    this.getTodos();
  }

  add(): void{
    this.todoSaveUseCase.handle(this.todoForm);
    this.clear();
    this.getTodos();
  }

  getTodos(): void{
    this.todos = this.todoGetAllUseCase.handle();
  }

  clear(){
     this.todoForm.reset();
     this.createTodoForm();
   }

  createTodoForm(){
    this.todoForm = new FormGroup({
      description: new FormControl(''),
    });
  }

  update(todo: Todo): void{
    this.todoUpdateUseCase.handle(todo);
  }

}
