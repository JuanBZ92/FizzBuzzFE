import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FizzBuzzRoutingModule } from './fizz-buzz-routing.module';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { FormModule } from 'src/app/utils/forms/form.module';
import { DialogModule } from 'src/app/utils/dialog/dialog.module';
import { ListModule } from 'src/app/utils/list/list.module';


@NgModule({
  declarations: [
    FizzBuzzComponent,
  ],
  imports: [
    CommonModule,
    FizzBuzzRoutingModule,
    DialogModule,
    ListModule,
    FormModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FizzBuzzComponent]
})
export class FizzBuzzModule { }
