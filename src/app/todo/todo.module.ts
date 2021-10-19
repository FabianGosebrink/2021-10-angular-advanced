import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './container/todo/todo.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoItemComponent } from './presentational/todo-item/todo-item.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';

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
  ],
})
export class TodoModule {}
