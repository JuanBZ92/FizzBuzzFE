import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FizzBuzz } from 'src/entities/FizzBuzz';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';
import { MockFizzBuzzService, } from './mock-api-services.spec';

const ApiEndpoint = 'http://localhost:5058/';

@Injectable()
export class FizzBuzzStateHandler {
  constructor(private fizzBuzzService: MockFizzBuzzService) {}

  getFizzBuzzList(url: string, body?: FizzBuzzRequest): Observable<FizzBuzz> {
    return this.fizzBuzzService.getFizzBuzzList(`${ApiEndpoint}${url}`, body);
  }
}
