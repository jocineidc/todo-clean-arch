import { Todo } from "src/app/domain/models/todo/todo.model";
import { Repository } from "../../base/repository";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TodoRepository implements Repository {
    constructor(
    ) { }

    getOne(id: string): Todo {
        try {
            const todos = this.getAll();
            const todo = (todos || [])?.find(todo => todo.id === id);
            if (!todo) {
                throw `To-do não encontrado id: ${id}`
            }
            return todo;
        } catch (error) {
            console.log('todoRepository.getOne() -> falha ao buscar toDo', error);
            throw 'todoRepository.getOne() -> falha ao buscar toDo';
        }
    }

    getAll(): Todo[] {
        try {
            const todos = localStorage.getItem('to-do');
            return todos ? JSON.parse(todos) : [];            
        } catch (error) {
            console.log('todoRepository.getAll() -> falha ao buscar toDos', error);
            throw 'todoRepository.getAll() -> falha ao buscar toDos';
        }
    }

    save(todo: Todo): void {
        try {
            const todos = this.getAll();
            todo.id = (new Date().getTime()).toString();
            todos.push(todo);
            localStorage.setItem('to-do', JSON.stringify(todos || []));
        } catch (error) {
            console.log('todoRepository.save() -> falha ao buscar salvar To-do', error);
            throw 'todoRepository.save() -> falha ao buscar salvar To-do';
        }
    }

    remove(id: string): void {
        try {
            const todos = (this.getAll() || []).filter(todo => todo.id !== id);
            localStorage.setItem('to-do', JSON.stringify(todos || []));
        } catch (error) {
            console.log('todoRepository.remove() -> falha ao remover To-do', error);
            throw 'todoRepository.remove() -> falha ao remover To-do';
        }
    }

    update(todo: Todo): void {
        try {
            const todos = (this.getAll() || []);
            const index = todos.findIndex(item => item.id === todo.id);
            if(index === -1){
                console.log(`todoRepository.update() -> To-do não localizado id: ${todo.id}`);
                return;
            }
            todos[index] = todo;
            localStorage.setItem('to-do', JSON.stringify(todos || []));
        } catch (error) {
            console.log('todoRepository.update() -> falha ao atualizar To-do', error);
            throw 'todoRepository.update() -> falha ao atualizar To-do';
        }    
    }

}