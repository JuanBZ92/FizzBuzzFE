import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api-service/api.service';
import { CoreTestingModule } from 'src/app/core-testing.module';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';
import { mockSet1 } from 'src/mocks/mock-api-data.spec';
import { FizzBuzzService } from './fizz-buzz.service';

const ApiEndpoint = 'http://localhost:5058/';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FizzBuzzService, ApiService],
      declarations: [],
      imports: [CoreTestingModule],
    });
    service = TestBed.inject(FizzBuzzService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call apiService.post for getFizzBuzzList', () => {
    let url = `fizzbuzz`;
    let fizzBuzzRequest: FizzBuzzRequest = mockSet1.fizzBuzzRequest;

    let spyService = spyOn(apiService, 'post').and.callThrough();
    service.getFizzBuzzList(`${ApiEndpoint}${url}`, fizzBuzzRequest);
    expect(spyService).toHaveBeenCalledWith(`${ApiEndpoint}${url}`, fizzBuzzRequest);
  });
});
