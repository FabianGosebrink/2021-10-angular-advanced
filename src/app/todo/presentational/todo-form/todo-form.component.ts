import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() todoAdded = new EventEmitter();
  @ViewChild('input') input: any;

  constructor() {}

  addTodo(): void {
    this.todoAdded.emit({
      value: this.input.nativeElement.value,
    });
  }
}
