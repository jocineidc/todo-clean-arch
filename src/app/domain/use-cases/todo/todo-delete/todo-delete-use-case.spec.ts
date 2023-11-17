import { TestBed } from "@angular/core/testing";
import { TodoRepository } from "src/app/data/repositories/todo/todo-repository";
import { TodoDeleteUseCase } from "./todo-delete-use-case";

let todoDeleteUseCase: TodoDeleteUseCase;
let todoRepository: TodoRepository;

describe('TodoDeleteUseCase', () => {
    beforeEach(() => TestBed.configureTestingModule({ }));
    
    it('should return false because id is not informed', () => {
        todoDeleteUseCase = TestBed.inject(TodoDeleteUseCase);
        expect(todoDeleteUseCase.handle('')).toBe(false);
    });

    it('should return false, because todo id is not valid', () => {
        todoDeleteUseCase = TestBed.inject(TodoDeleteUseCase);
        expect(todoDeleteUseCase.handle('a1')).toBe(false);
    });

    it('should return true when remove a valid item', () => {
        todoDeleteUseCase = TestBed.inject(TodoDeleteUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        spyOn(todoRepository, 'remove').and.returnValue();
        expect(todoDeleteUseCase.handle('11')).toBe(true);
    });
  });
  