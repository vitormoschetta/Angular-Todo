import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html'  
})
export class TodoEditComponent implements OnInit {
  
  form!: FormGroup
  submitted = false
  responseError = ''
  todo!: Todo

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.todoService.getById(id).subscribe(data => {
      this.todo = data
      this.createForm()
    })
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
