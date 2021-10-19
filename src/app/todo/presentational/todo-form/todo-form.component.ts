import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter();
  @ViewChild('input') input: any;

  firstFormGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      todoValue: '',
    });

    this.firstFormGroup.get('todoValue').valueChanges.subscribe(console.log);
  }

  addTodo(): void {
    // this.todoAdded.emit({
    //   value: this.input.nativeElement.value,
    // });

    console.log(this.firstFormGroup.value);
  }
}
