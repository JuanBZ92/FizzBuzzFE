import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, query: string = '', options?: any): Observable<any> {
    return this.http
      .get(url + '?' + query, Object.assign(this.getHttpOptionsDefault(), options))
      .pipe(retry({
        count: 3,
        delay: 5000
      }), catchError(this.handleError));
  }

  post(url: string, data = {}, options?: any): Observable<any> {
    return this.http
      .post(url, data, Object.assign(this.getHttpOptionsDefault(), options))
      .pipe(retry({
        count: 3,
        delay: 5000
      }), catchError(this.handleError));
  }

  handleFileUploadError(error: HttpErrorResponse) {
    return of(new Error(`The file(s) couldn't be uploaded.`));
  }

  handleError(error: any): Observable<any> {
    // errors coming from the API must be ApiError and will be wrapped in Angular's error type
    // i.e. error.error is of type ApiError
    console.log(error);
    if (error.status === 401) {
      throw new Error(`Unauthorized, please log in.`);
    } else {
      throw new Error(`Error Code: ${error.status}`);
    }
  }

  private getHttpOptionsDefault() {
    return Object.create(httpOptions);
  }

}
