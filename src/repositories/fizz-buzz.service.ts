import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api-service/api.service';
import { FizzBuzz } from 'src/entities/FizzBuzz';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor(private apiService: ApiService) {}

  getFizzBuzzList(url: string, body?: FizzBuzzRequest): Observable<FizzBuzz> {
    return this.apiService.post(url, body);
  }

}
