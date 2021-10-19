import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('markAsDone', () => {
    it('should emit event', () => {
      const spy = spyOn(component.markedAsDone, 'emit');

      component.markAsDone(null);

      expect(spy).toHaveBeenCalledOnceWith(null);
    });
  });

  describe('delete', () => {
    it('should emit delete event when html button is clicked', () => {
      const spy = spyOn(component.deleted, 'emit');

      const button = fixture.debugElement.query(By.css('button'));

      button.nativeElement.click();

      expect(spy).toHaveBeenCalledOnceWith(undefined);
    });
  });
});
