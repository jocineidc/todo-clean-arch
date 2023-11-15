import { Todo } from "src/app/domain/models/todo/todo.model";

export interface Repository {
    getOne(id: string): Todo;
    getAll(): Todo[];
    save(todo: Todo): void;
    remove(id: string): void;
    update(todo: Todo): void;
}