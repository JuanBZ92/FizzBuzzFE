import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FizzBuzz } from 'src/entities/FizzBuzz';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';
import { environment } from 'src/environments/environment';
import { FizzBuzzService } from 'src/repositories/fizz-buzz.service';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzStateHandler {

  constructor(private fizzBuzzService: FizzBuzzService) {}

  getFizzBuzzList(url: string, body?: FizzBuzzRequest): Observable<FizzBuzz> {
    return this.fizzBuzzService.getFizzBuzzList(
      `${environment.API_URL}/${url}`,
      body
    );
  }
}
