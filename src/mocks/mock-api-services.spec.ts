import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FizzBuzz } from 'src/entities/FizzBuzz';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';
import { mockSet1 } from './mock-api-data.spec';


@Injectable()
export class MockFizzBuzzService {
  getFizzBuzzList(url: string, body?: FizzBuzzRequest): Observable<FizzBuzz> {
    const model = new FizzBuzz(mockSet1.fizzBuzz);
    return of(model);
  }
}
