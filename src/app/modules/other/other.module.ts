import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { OtherListComponent } from './other-list/other-list.component';


@NgModule({
  declarations: [
    OtherListComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
