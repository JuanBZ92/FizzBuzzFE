import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FizzBuzzListComponent } from './fizz-buzz-list/fizz-buzz-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FizzBuzzListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [FizzBuzzListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListModule { }
