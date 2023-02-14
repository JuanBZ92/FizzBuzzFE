import { Component, OnInit } from '@angular/core';
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

  constructor(private fizzBuzzStateHandler: FizzBuzzStateHandler) {}
  
  getFizzBuzzList(request: FizzBuzzRequest) {
    this.fizzBuzzStateHandler.getFizzBuzzList('fizzbuzz', request).subscribe({
      next: (result) => this.fizzBuzz = result,
      error: (error) => console.log(error)
    });
  }
}
