import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockSet1 } from 'src/mocks/mock-api-data.spec';

import { FizzBuzzListComponent } from './fizz-buzz-list.component';

describe('FizzBuzzListComponent', () => {
  let component: FizzBuzzListComponent;
  let fixture: ComponentFixture<FizzBuzzListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzBuzzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true', () => {
    component.fizzBuzz = mockSet1.fizzBuzz;
    let expectedTrue = component.checkFizzBuzz(component?.fizzBuzz?.fizzBuzzList![2]);
    expect(expectedTrue).toBeTrue();
  });
});
