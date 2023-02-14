import { TestBed } from '@angular/core/testing';

import { FizzBuzzStateHandlerService } from './fizz-buzz-state-handler';

describe('FizzBuzzStateHandlerService', () => {
  let service: FizzBuzzStateHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzStateHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
