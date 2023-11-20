import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoComponent } from "./presentation/todo/todo.component";


describe('AppComponent', () => {
    let fixture: ComponentFixture<TodoComponent>;

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
});