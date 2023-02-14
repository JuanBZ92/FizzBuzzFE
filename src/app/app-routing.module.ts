import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'fizzbuzz', loadChildren: () => import('./components/fizz-buzz/fizz-buzz.module').then(m => m.FizzBuzzModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
