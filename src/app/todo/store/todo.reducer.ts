import { createReducer, on } from '@ngrx/store';
import { Todo } from '../services/todo';
import * as todoActions from './todo.actions';

export const todoFeatureName = 'todo';

export interface TodoState {
  items: Todo[];
  loading: boolean;
}

export const initalState: TodoState = {
  items: [],
  loading: false,
};

export const todoReducer = createReducer(
  initalState,
  on(todoActions.loadAllTodos, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(todoActions.loadAllTodosFinished, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      items: payload,
    };
  }),

  on(todoActions.addTodoFinished, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      items: [...state.items, payload],
    };
  })
);
