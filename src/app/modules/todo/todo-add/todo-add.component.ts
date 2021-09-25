import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit {

  form!: FormGroup
  submitted = false

  constructor(
    private todoService: TodoService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit() {
    this.submitted = true
    if (this.form.invalid)
      return

    this.todoService.add(this.f.title.value).subscribe(
      () => this.router.navigate(['/todo']))
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  get f() { return this.form.controls; }
}
