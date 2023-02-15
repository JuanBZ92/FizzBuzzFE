import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FizzBuzz } from 'src/entities/FizzBuzz';

@Component({
  selector: 'app-fizz-buzz-list',
  templateUrl: './fizz-buzz-list.component.html',
  styleUrls: ['./fizz-buzz-list.component.scss']
})
export class FizzBuzzListComponent implements OnChanges {
  @Input() fizzBuzz?: FizzBuzz;
  fizzBuzzWords: string[] = ['Fizz', 'Buzz', 'FizzBuzz'];
  fizzBuzzSecond?: FizzBuzz;
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fizzBuzz']){
      console.log(this.fizzBuzz);
      this.fizzBuzzSecond = this.fizzBuzz;
      console.log(this.fizzBuzzSecond);

    }
  }

  checkFizzBuzz(word: string): boolean {
    return this.fizzBuzzWords.some(x => x === word)
  }
}
