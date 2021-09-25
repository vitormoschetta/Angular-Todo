import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todos!: Todo[];

  constructor(private todoService: TodoService) {
    this.todoService.getAll().subscribe(
      (data: Todo[]) => {
        this.todos = data
        console.log(this.todos)
      },
      (error) => {
        console.log(error.message)
      })
  }

  ngOnInit(): void { }

  onCheck(todo: Todo) {
    todo.done = !todo.done
    this.todoService.update(todo).subscribe()
  }

}
