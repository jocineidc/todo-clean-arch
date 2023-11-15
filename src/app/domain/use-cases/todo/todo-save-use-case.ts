import { TodoRepository } from './../../../data/repositories/todo/todo-repository';
import { UseCase } from "../../base/use-case";
import { Todo } from "../../models/todo/todo.model";
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export type TodoSaveRequestUseCase = FormGroup;
export type TodoSaveResponseUseCase = void

@Injectable({
    providedIn: 'root'
})

export class TodoSaveUseCase implements UseCase {
    constructor(
        private todoRepository: TodoRepository,
    ) { }

    handle(request: TodoSaveRequestUseCase): TodoSaveResponseUseCase {
        try {
            if(!request || !request.value?.description){
                console.log('TodoSaveUseCase.handle() -> Todo Inválido!');
                return;
            };
            const todo = {
                id: '',
                isDone: false,
                description: request.value?.description,
            }
            this.todoRepository.save(todo);
            console.log('TodoSaveUseCase.handle() -> Sucesso')
        } catch (error) {
            console.log(`TodoSaveUseCase.handle) -> Não foi possivel salvar o toDo! - error: ${error}`);
        }
    }
}