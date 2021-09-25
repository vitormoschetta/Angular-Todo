import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'other',
    loadChildren: () => import('./modules/other/other.module').then((m) => m.OtherModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
