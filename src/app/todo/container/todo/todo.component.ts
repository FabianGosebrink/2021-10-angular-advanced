import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../services/todo';
import { TodoStoreFacade } from '../../store/todo.facade';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  loading$: Observable<boolean>;
  items$: Observable<Todo[]>;

  constructor(private readonly todoStoreFacade: TodoStoreFacade) {}

  ngOnInit(): void {
    this.loading$ = this.todoStoreFacade.loading$;
    this.items$ = this.todoStoreFacade.items$;

    this.todoStoreFacade.getAllItems();
  }

  addTodo(value: string): void {
    this.todoStoreFacade.addTodo(value);
  }

  deleteTodo(itemToDelete: Todo): void {}

  markAsDone(item: Todo): void {}
}
