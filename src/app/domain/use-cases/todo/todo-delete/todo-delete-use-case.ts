import { Injectable } from "@angular/core";
import { TodoRepository } from 'src/app/data/repositories/todo/todo-repository';
import { UseCase } from "src/app/domain/base/use-case";

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