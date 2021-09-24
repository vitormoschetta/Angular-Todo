import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '',  component: TodoListComponent},
  { path: 'add', component: TodoAddComponent},
  { path: 'edit',  component: TodoEditComponent},
  { path: 'delete', component: TodoDeleteComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
