import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as todoActions from './todo.actions';
import { getAllTodoItems, getTodoLoading } from './todo.selectors';

@Injectable({ providedIn: 'root' })
export class TodoStoreFacade {
  loading$ = this.store.pipe(select(getTodoLoading));
  items$ = this.store.pipe(select(getAllTodoItems));

  constructor(private readonly store: Store) {}

  getAllItems() {
    this.store.dispatch(todoActions.loadAllTodos());
  }

  addTodo(value: string): void {
    this.store.dispatch(todoActions.addTodo({ payload: value }));
  }
}
