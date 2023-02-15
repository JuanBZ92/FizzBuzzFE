import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FizzBuzzDialogComponent } from './fizz-buzz-dialog/fizz-buzz-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ListModule } from '../list/list.module';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FizzBuzzDialogComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    ListModule
  ],
  providers: [MatDialog, MatSnackBar],
  entryComponents:[MatDialogModule],
  exports: [FizzBuzzDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule { }
