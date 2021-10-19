import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item: Todo;
  @Output() markedAsDone = new EventEmitter();
  @Output() deleted = new EventEmitter();

  markAsDone(item: Todo) {
    this.markedAsDone.emit(item);
  }

  deleteTodo(item: Todo) {
    this.deleted.emit(item);
  }
}
