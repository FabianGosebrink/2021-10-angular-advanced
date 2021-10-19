import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { Todo } from '../../services/todo';
import { TodoService } from '../../services/todo.service';
import { TodoServiceMock } from '../../services/todo.service-mock';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let service: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [
        {
          provide: TodoService,
          useClass: TodoServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it(
      'should call correct method when loading',
      waitForAsync(() => {
        const spy = spyOn(service, 'getAllTodos').and.returnValue(of([]));

        fixture.detectChanges(); // calls ngOnInit()

        fixture.whenStable().then(() => {
          expect(component.items).toEqual([]);
          expect(spy).toHaveBeenCalledTimes(1);
        });
      })
    );
  });

  describe('markAsDone', () => {
    it(
      'should call correct method with correct done boolean',
      waitForAsync(() => {
        const spy = spyOn(service, 'updateTodo').and.returnValue(of(null));

        const todo = {
          id: '5',
          created: 'someDate',
          value: 'wash car',
          done: false,
        } as Todo;

        component.markAsDone(todo);

        fixture.whenStable().then(() => {
          expect(spy).toHaveBeenCalledOnceWith({
            id: '5',
            created: 'someDate',
            value: 'wash car',
            done: true,
          });
        });
      })
    );
  });
});
