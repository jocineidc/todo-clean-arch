import { Injectable } from "@angular/core";
import { TodoRepository } from "src/app/data/repositories/todo/todo-repository";
import { UseCase } from "src/app/domain/base/use-case";
import { Todo } from "src/app/domain/models/todo/todo.model";

export type TodoGetAllRequestUseCase = void;
export type TodoGetAllResponseUseCase = Todo[];

@Injectable({
    providedIn: 'root'
})

export class TodoGetAllUseCase implements UseCase {
    constructor(
        private todoRepository: TodoRepository,
    ) { }

    handle(request: TodoGetAllRequestUseCase): TodoGetAllResponseUseCase{
        try {
            return this.todoRepository.getAll();
        } catch (error) {
            console.log(`TodoGetAllUseCase.handle() -> Não foi possivel buscar toDos! - error: ${error}`);
            return [];
        }
    }
}