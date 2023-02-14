import { Component, Input } from '@angular/core';
import { FizzBuzz } from 'src/entities/FizzBuzz';

@Component({
  selector: 'app-fizz-buzz-list',
  templateUrl: './fizz-buzz-list.component.html',
  styleUrls: ['./fizz-buzz-list.component.scss']
})
export class FizzBuzzListComponent {
  @Input() fizzBuzz?: FizzBuzz;
  fizzBuzzWords: string[] = ['Fizz', 'Buzz', 'FizzBuzz'];

  checkFizzBuzz(word: string): boolean {
    return this.fizzBuzzWords.some(x => x === word)
  }
}
