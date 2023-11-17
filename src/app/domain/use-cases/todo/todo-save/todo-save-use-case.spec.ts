import { TestBed } from "@angular/core/testing";
import { TodoRepository } from "src/app/data/repositories/todo/todo-repository";
import { TodoSaveUseCase } from "./todo-save-use-case";
import { FormControl, FormGroup } from "@angular/forms";

let todoSaveUseCase: TodoSaveUseCase;
let todoRepository: TodoRepository;

describe('TodoSaveUseCase', () => {
    beforeEach(() => TestBed.configureTestingModule({ }));
    
    it('should return true when save item has been successfully', () => {
        todoSaveUseCase = TestBed.inject(TodoSaveUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = new FormGroup({
            id: new FormControl('1'),
            isDone: new FormControl(false),
            description: new FormControl('todo teste'),
        });
        spyOn(todoRepository, 'save', ).and.returnValue();
        expect(todoSaveUseCase.handle(todoMock)).toEqual(true);
    });

    it('should return false when todo is invalid', () => {
        todoSaveUseCase = TestBed.inject(TodoSaveUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = new FormGroup({
            id: new FormControl('1'),
            isDone: new FormControl(false),
            description: new FormControl(''),
        });
        expect(todoSaveUseCase.handle(todoMock)).toEqual(false);
    });

    it('should return false when save error', () => {
        todoSaveUseCase = TestBed.inject(TodoSaveUseCase);
        todoRepository = TestBed.inject(TodoRepository);
        const todoMock = new FormGroup({
            id: new FormControl('1'),
            isDone: new FormControl(false),
            description: new FormControl(''),
        });
        spyOn(todoRepository, 'save', ).and.throwError('Erro save mock test');
        expect(todoSaveUseCase.handle(todoMock)).toEqual(false);
    });

  });
  