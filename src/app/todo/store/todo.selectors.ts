import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureName, TodoState } from './todo.reducer';

const getTodoState = createFeatureSelector<TodoState>(todoFeatureName);

export const getTodoLoading = createSelector(
  getTodoState,
  (todoState) => todoState.loading
);

export const getAllTodoItems = createSelector(
  getTodoState,
  (todoState) => todoState.items
);

export const getDoneTodoItems = createSelector(getAllTodoItems, (items) =>
  items.filter((x) => x.done)
);

export const getUndoneTodoItems = createSelector(getAllTodoItems, (items) =>
  items.filter((x) => !x.done)
);
