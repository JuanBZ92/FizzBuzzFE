import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';

const routes: Routes = [{ path: '', component: FizzBuzzComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FizzBuzzRoutingModule { }
