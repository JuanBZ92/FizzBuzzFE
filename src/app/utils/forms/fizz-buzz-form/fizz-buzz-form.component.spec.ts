import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FizzBuzzRequest } from 'src/entities/FizzBuzzRequest';
import { FormModule } from '../form.module';

import { FizzBuzzFormComponent } from './fizz-buzz-form.component';

describe('FizzBuzzFormComponent', () => {
  let component: FizzBuzzFormComponent;
  let fixture: ComponentFixture<FizzBuzzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzFormComponent ],
      imports: [FormModule, BrowserAnimationsModule],
      providers: [MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzBuzzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create fizz buzz request', () => {
    component.ngOnInit();
    component.fizzBuzzForm.controls['firstNumber'].setValue(1);
    component.fizzBuzzForm.controls['limit'].setValue(10);
    component.getFizzBuzzList();

    let request= new FizzBuzzRequest();
    request.firstNumber = 1;
    request.limit = 10;

    expect(component.request).toEqual(request);
  });
});
