import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'fromEvent',
    component: FromEventComponent,
  },
  {
    path: 'interval',
    component: IntervalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
