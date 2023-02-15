import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FizzBuzzDialogComponent } from 'src/app/utils/dialog/fizz-buzz-dialog/fizz-buzz-dialog.component';
import { FizzBuzz } from 'src/entities/FizzBuzz';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';
import { FizzBuzzStateHandler } from 'src/stateHandlers/fizz-buzz-state-handler';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent {
  
  fizzBuzz?: FizzBuzz;

  constructor(private fizzBuzzStateHandler: FizzBuzzStateHandler, private dialog: MatDialog) {}
  
  getFizzBuzzList(request: FizzBuzzRequest) {
    this.fizzBuzzStateHandler.getFizzBuzzList('fizzbuzz', request).subscribe({
      next: (result) => {this.fizzBuzz = result; this.openDialog()},
      error: (error) => console.log(error)
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(FizzBuzzDialogComponent, {
      data: this.fizzBuzz,
      enterAnimationDuration: '2000ms',
      exitAnimationDuration: '500ms',
    });
  }
}
