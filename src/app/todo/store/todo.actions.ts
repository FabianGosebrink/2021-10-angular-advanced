import { createAction, props } from '@ngrx/store';
import { Todo } from '../services/todo';

const actionFeaturePrefix = '[Todo]';
export const loadAllTodos = createAction(
  `${actionFeaturePrefix} Load all Todos`
);

export const loadAllTodosFinished = createAction(
  `${actionFeaturePrefix} Load all Todos Finished`,
  props<{ payload: Todo[] }>()
);

export const addTodo = createAction(
  `${actionFeaturePrefix} Add Todo`,
  props<{ payload: string }>()
);

export const addTodoFinished = createAction(
  `${actionFeaturePrefix} Add Todo Finished`,
  props<{ payload: Todo }>()
);
