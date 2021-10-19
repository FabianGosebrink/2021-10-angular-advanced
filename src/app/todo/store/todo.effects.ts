import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { TodoService } from './../services/todo.service';
import {
  addTodo,
  addTodoFinished,
  loadAllTodos,
  loadAllTodosFinished,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllTodos),
      switchMap(() =>
        this.todoService
          .getAllTodos()
          .pipe(map((todos) => loadAllTodosFinished({ payload: todos })))
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      switchMap(({ payload }) =>
        this.todoService
          .addTodo(payload)
          .pipe(map((todo) => addTodoFinished({ payload: todo })))
      )
    )
  );
}
