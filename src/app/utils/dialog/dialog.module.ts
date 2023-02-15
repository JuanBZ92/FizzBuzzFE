import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FizzBuzzDialogComponent } from './fizz-buzz-dialog/fizz-buzz-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ListModule } from '../list/list.module';


@NgModule({
  declarations: [
    FizzBuzzDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ListModule
  ],
  providers: [MatDialog],
  entryComponents:[MatDialogModule],
  exports: [FizzBuzzDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule { }
