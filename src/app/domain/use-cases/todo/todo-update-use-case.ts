import { TodoRepository } from './../../../data/repositories/todo/todo-repository';
import { UseCase } from "../../base/use-case";
import { Todo } from "../../models/todo/todo.model";
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export type TodoUpdateRequestUseCase = Todo;
export type TodoUpdateResponseUseCase = void

@Injectable({
    providedIn: 'root'
})

export class TodoUpdateUseCase implements UseCase {
    constructor(
        private todoRepository: TodoRepository,
    ) { }

    handle(request: TodoUpdateRequestUseCase): TodoUpdateResponseUseCase {
        try {
            if(!request || !request.description){
                console.log('TodoUpdateUseCase.handler() -> Todo Inválido!');
                return;
            };
            request.isDone = !request.isDone;
            this.todoRepository.update(request);
            console.log('TodoUpdateUseCase.handler() -> Sucesso')
        } catch (error) {
            console.log(`TodoUpdateUseCase.handler() -> Não foi possivel salvar o toDo! - error: ${error}`);
        }
    }
}