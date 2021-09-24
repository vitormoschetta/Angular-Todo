import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo.module').then((m) => m.TodoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'other',
    loadChildren: () => import('./modules/other/other.module').then((m) => m.OtherModule),
     canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
