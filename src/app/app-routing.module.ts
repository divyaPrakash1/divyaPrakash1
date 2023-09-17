import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'observable', 
    loadChildren: () => import('./observable/observable.module').then((m) => m.ObservableModule)
  },
  {
    path:'promise', 
    loadChildren: () => import('./promise/promise.module').then((m) => m.PromiseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
