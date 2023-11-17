import { Injectable } from '@angular/core';
import { TodoRepository } from 'src/app/data/repositories/todo/todo-repository';
import { UseCase } from 'src/app/domain/base/use-case';
import { Todo } from 'src/app/domain/models/todo/todo.model';

export type TodoUpdateRequestUseCase = Todo;
export type TodoUpdateResponseUseCase = boolean;

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
                return false;
            };
            request.isDone = !request.isDone;
            this.todoRepository.update(request);
            console.log('TodoUpdateUseCase.handler() -> Sucesso');
            return true;
        } catch (error) {
            console.log(`TodoUpdateUseCase.handler() -> Não foi possivel salvar o toDo! - error: ${error}`);
            return false;
        }
    }
}