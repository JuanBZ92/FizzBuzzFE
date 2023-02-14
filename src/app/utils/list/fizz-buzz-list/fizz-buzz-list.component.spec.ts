import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzListComponent } from './fizz-buzz-list.component';

describe('FizzBuzzListComponent', () => {
  let component: FizzBuzzListComponent;
  let fixture: ComponentFixture<FizzBuzzListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzBuzzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
