import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';

@Component({
  selector: 'app-fizz-buzz-form',
  templateUrl: './fizz-buzz-form.component.html',
  styleUrls: ['./fizz-buzz-form.component.scss']
})
export class FizzBuzzFormComponent implements OnInit {
  @Output() getFizzBuzzListEmit = new EventEmitter<FizzBuzzRequest>();

  fizzBuzzForm!: FormGroup;

  ngOnInit(): void {
    this.fizzBuzzForm = new FormGroup({
      firstNumber: new FormControl('', [Validators.required]),
      limit: new FormControl('', [Validators.required]),
    });
  }

  getFizzBuzzList() {
    //this for is to simulate 100 calls in a second.
    for(let i = 0; i < 100; i++)
    {
        let request = new FizzBuzzRequest;
        request.firstNumber = this.fizzBuzzForm.controls['firstNumber'].value;
        request.limit = this.fizzBuzzForm.controls['limit'].value;
        this.getFizzBuzzListEmit.emit(request);
    }
  }
}
