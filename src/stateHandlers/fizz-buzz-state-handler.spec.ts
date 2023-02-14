import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FizzBuzz } from 'src/entities/FizzBuzz';
import { mockSet1 } from 'src/mocks/mock-api-data.spec';
import { MockFizzBuzzService } from 'src/mocks/mock-api-services.spec';
import { FizzBuzzService } from 'src/repositories/fizz-buzz.service';
import { FizzBuzzStateHandler } from './fizz-buzz-state-handler';

const ApiEndpoint = 'http://localhost:5058/';

describe('FizzBuzzStateHandler', () => {
  let service: FizzBuzzStateHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        FizzBuzzStateHandler,
        { provide: FizzBuzzService, useClass: MockFizzBuzzService }
      ],
    });
    service = TestBed.inject(FizzBuzzStateHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getFizzBuzzList', () => {
    let url = `fizzbuzz`;
    let fizzBuzz: FizzBuzz = mockSet1.fizzBuzzRequest;
    service.getFizzBuzzList(`${ApiEndpoint}${url}`, fizzBuzz).subscribe((x) => {
      expect(x).toEqual(mockSet1.fizzBuzz);
    });
  });

});
