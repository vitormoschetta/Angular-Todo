import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherListComponent } from './other-list/other-list.component';

const routes: Routes = [
  {
    path: '',
    component: OtherListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
