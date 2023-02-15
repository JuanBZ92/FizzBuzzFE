import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreTestingModule } from 'src/app/core-testing.module';
import { mockSet1 } from 'src/mocks/mock-api-data.spec';
import { MockFizzBuzzService } from 'src/mocks/mock-api-services.spec';
import { FizzBuzzService } from 'src/repositories/fizz-buzz.service';
import { FizzBuzzStateHandler } from 'src/stateHandlers/fizz-buzz-state-handler';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FizzBuzzComponent } from './fizz-buzz.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MatDialogRefMock {
  close(value = '') {}
}

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        FizzBuzzStateHandler,
        MatSnackBar,
        { provide: FizzBuzzService, useClass: MockFizzBuzzService },
        { provide: MAT_DIALOG_DATA, useValue: {} }, // add here
        { provide: MatDialogRef, useClass: MatDialogRefMock }, // add here,
      ],
      imports: [CoreTestingModule, MatDialogModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return fizz buzz list', async () => {
    await component.getFizzBuzzList(mockSet1.fizzBuzzRequest);
    expect(component.fizzBuzz).toEqual(mockSet1.fizzBuzz);
  });

});
