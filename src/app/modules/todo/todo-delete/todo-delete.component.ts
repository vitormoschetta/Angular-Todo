import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html'
})
export class TodoDeleteComponent implements OnInit {

  form!: FormGroup
  submitted = false
  responseError = ''
  todo!: Todo

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.todoService.getById(id).subscribe(data => {
      this.todo = data
    })
  }

  onDelete() {
    this.todoService.delete(this.todo.id).subscribe(
      data => { this.router.navigate(['/todo']) },
      error => { this.responseError = error }
    )
  }

}
