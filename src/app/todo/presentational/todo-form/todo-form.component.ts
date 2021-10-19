import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinLengthValidator } from './min-length.validator';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter();

  firstFormGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      todoValue: [
        '...',
        [Validators.required, MinLengthValidator.minlengthValidator],
      ],
    });
  }

  addTodo(): void {
    this.todoAdded.emit({
      value: this.firstFormGroup.value.todoValue,
    });

    this.firstFormGroup.reset();
  }
}
