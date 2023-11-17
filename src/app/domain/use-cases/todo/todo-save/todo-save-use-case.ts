import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodoRepository } from 'src/app/data/repositories/todo/todo-repository';
import { UseCase } from 'src/app/domain/base/use-case';

export type TodoSaveRequestUseCase = FormGroup;
export type TodoSaveResponseUseCase = boolean

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
                return false;
            };
            const todo = {
                id: '',
                isDone: false,
                description: request.value?.description,
            }
            this.todoRepository.save(todo);
            console.log('TodoSaveUseCase.handle() -> Sucesso');
            return true;
        } catch (error) {
            console.log(`TodoSaveUseCase.handle) -> Não foi possivel salvar o toDo! - error: ${error}`);
            return false;
        }
    }
}