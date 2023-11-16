import { TestBed } from "@angular/core/testing";
import { TodoGetAllUseCase } from "./todo-get-all-use-case";
import { TodoRepository } from "src/app/data/repositories/todo/todo-repository";

let todoGetAllUseCase: TodoGetAllUseCase;
let todoRepository: TodoRepository;

describe('TodoGetAllUseCase', () => {
    beforeEach(() => TestBed.configureTestingModule({ }));
    
    it('should return all todos', () => {
        todoGetAllUseCase = TestBed.inject(TodoGetAllUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = [{
            id: '1',
            isDone: false,
            description: 'todo 1'
        }];
        spyOn(todoRepository, 'getAll', ).and.returnValue(todoMock);
        expect(todoGetAllUseCase.handle()).toEqual(todoMock);
    });

    it('should return Todos = []', () => {
        todoGetAllUseCase = TestBed.inject(TodoGetAllUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        expect(todoGetAllUseCase.handle()).toEqual([]);
    });
  });
  