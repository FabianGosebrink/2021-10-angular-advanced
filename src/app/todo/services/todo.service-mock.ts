import { Observable, of } from 'rxjs';
import { Todo } from './todo';

export class TodoServiceMock {
  getAllTodos(): Observable<Todo[]> {
    return of(null);
  }

  addTodo(value: any): Observable<Todo> {
    return of(null);
  }

  deleteTodo(item: Todo): Observable<void> {
    return of(null);
  }

  updateTodo(newItem: Todo): Observable<Todo> {
    return of(null);
  }
}
