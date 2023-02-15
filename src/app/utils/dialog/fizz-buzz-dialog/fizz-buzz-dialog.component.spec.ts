import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FizzBuzzDialogComponent } from './fizz-buzz-dialog.component';

export class MatDialogRefMock {
  close(value = '') {}
}

describe('FizzBuzzDialogComponent', () => {
  let component: FizzBuzzDialogComponent;
  let fixture: ComponentFixture<FizzBuzzDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzDialogComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }, // add here
        { provide: MatDialogRef, useClass: MatDialogRefMock }, // add here,
      ],
      imports: [MatDialogModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzBuzzDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
