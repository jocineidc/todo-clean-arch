import { TodoRepository } from "src/app/data/repositories/todo/todo-repository";
import { TodoUpdateUseCase } from "./todo-update-use-case";
import { TestBed } from "@angular/core/testing";

let todoUpdateUseCase: TodoUpdateUseCase;
let todoRepository: TodoRepository;

describe('TodoUpdateUseCase', () => {
    beforeEach(() => TestBed.configureTestingModule({ }));
    
    it('should return true when update has been successfuly', () => {
        todoUpdateUseCase = TestBed.inject(TodoUpdateUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = {
            id: '1',
            isDone: false,
            description: 'todo 1'
        };
        spyOn(todoRepository, 'update').and.returnValue();
        expect(todoUpdateUseCase.handle(todoMock)).toEqual(true);
    });

    it('should return false when todo is invalid', () => {
        todoUpdateUseCase = TestBed.inject(TodoUpdateUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = {
            id: '1',
            isDone: false,
            description: ''
        };
        expect(todoUpdateUseCase.handle(todoMock)).toEqual(false);
    });

    it('should return false when todo udate error', () => {
        todoUpdateUseCase = TestBed.inject(TodoUpdateUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = {
            id: '1',
            isDone: false,
            description: 'Todo teste'
        };
        spyOn(todoRepository, 'update').and.throwError('update todomock error');
        expect(todoUpdateUseCase.handle(todoMock)).toEqual(false);
    });
});