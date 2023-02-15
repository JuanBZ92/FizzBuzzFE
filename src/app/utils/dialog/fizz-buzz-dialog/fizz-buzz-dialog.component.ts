import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FizzBuzz } from 'src/entities/FizzBuzz';

@Component({
  selector: 'app-fizz-buzz-dialog',
  templateUrl: './fizz-buzz-dialog.component.html',
  styleUrls: ['./fizz-buzz-dialog.component.scss']
})
export class FizzBuzzDialogComponent {
  fizzBuzz?: FizzBuzz;

  constructor(@Inject(MAT_DIALOG_DATA) public data: FizzBuzz, private dialogRef: MatDialogRef<FizzBuzzDialogComponent>, private snackBar: MatSnackBar) {
    this.fizzBuzz = data;
    this.snackBar.open(`File has been download.`, 'Close', { duration: 3000 });
  }
}
