import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoGetAllUseCase } from 'src/app/domain/use-cases/todo/todo-get-all/todo-get-all-use-case';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoGetAllUseCase: TodoGetAllUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
  });

  it('should create component', () => {
    fixture = TestBed.createComponent(TodoComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should show H4 title', () => {
    fixture = TestBed.createComponent(TodoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.textContent).toContain('Cadastro de To-do(s)');
  });

  it('should not show H4 todo list when dont todo', () => {
    fixture = TestBed.createComponent(TodoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    todoGetAllUseCase = TestBed.inject(TodoGetAllUseCase);
    spyOn(todoGetAllUseCase, 'handle').and.returnValue([]);
    expect(compiled.querySelector('h4')?.textContent).not.toContain('Lista de To-do(s)');
  });


  it('should show H4 todo list when have todo', () => {
    const todoMock = [{
        id: '1',
        isDone: false,
        description: 'todo 1'
    }];
    fixture = TestBed.createComponent(TodoComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.componentInstance.todos = todoMock;
    fixture.detectChanges();
    expect(compiled.querySelector('h5')?.textContent).toContain('Lista de To-do(s)');
  });

  



});
