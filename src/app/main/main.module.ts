import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ObservableRoutingModule } from './main-routing.module';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';



@NgModule({
  declarations: [
    MainComponent,
    PromiseComponent,
    FromEventComponent,
    IntervalComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class MainModule { }
