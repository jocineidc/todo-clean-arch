import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { TodoRepository } from 'src/app/data/repositories/todo/todo-repository';

export type TodoDeleteResponseUseCase = void;
export type TodoDeleteRequestUseCase = string;

@Injectable({
  providedIn: 'root'
})

export class TodoDeleteUseCase implements UseCase {
    constructor(
        private todoRepository: TodoRepository,
    ) { }

    handle(request: TodoDeleteRequestUseCase): TodoDeleteResponseUseCase{
        try {
            if(!request){
                console.log('TodoDeleteUseCase.handle() -> toDo não informado!');
                return;
            };
            this.todoRepository.remove(request);
            console.log('TodoDeleteUseCase.handle() -> Sucesso!');
        } catch (error) {
            console.log(`TodoDeleteUseCase.handle) -> Todo Não foi possível remover o toDo! - error: ${error}`);
        }
    }
}