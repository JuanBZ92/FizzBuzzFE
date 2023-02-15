import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';

@Component({
  selector: 'app-fizz-buzz-form',
  templateUrl: './fizz-buzz-form.component.html',
  styleUrls: ['./fizz-buzz-form.component.scss']
})
export class FizzBuzzFormComponent implements OnInit {
  @Output() getFizzBuzzListEmit = new EventEmitter<FizzBuzzRequest>();

  fizzBuzzForm!: FormGroup;
  request?: FizzBuzzRequest;

  constructor(private snackBar: MatSnackBar){}
  
  ngOnInit(): void {
    this.fizzBuzzForm = new FormGroup({
      firstNumber: new FormControl('', [Validators.required]),
      limit: new FormControl('', [Validators.required]),
    });
  }

  getFizzBuzzList() {
    if (this.fizzBuzzForm.controls['limit'].value <= 0) {
      this.snackBar.open(`Limit can't be less than 1.`, 'Close', { duration: 3000 });
    }
    //this for is to simulate 100 calls in a second.
    //for(let i = 0; i < 100; i++)
    //{
        this.request = new FizzBuzzRequest;
        this.request.firstNumber = this.fizzBuzzForm.controls['firstNumber'].value;
        this.request.limit = this.fizzBuzzForm.controls['limit'].value;
        this.getFizzBuzzListEmit.emit(this.request);
    //}
  }
}
