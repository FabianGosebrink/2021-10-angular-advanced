import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoComponent } from './container/todo/todo.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoItemComponent } from './presentational/todo-item/todo-item.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';
import { TodoEffects } from './store/todo.effects';
import { todoFeatureName, todoReducer } from './store/todo.reducer';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ]),
    StoreModule.forFeature(todoFeatureName, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
