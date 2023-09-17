import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise.component';
import { ObservableRoutingModule } from './promise-routing.module';



@NgModule({
  declarations: [
    PromiseComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class PromiseModule { }
