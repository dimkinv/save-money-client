import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastExpensesComponent } from './last-expenses.component';

describe('LastExpensesComponent', () => {
  let component: LastExpensesComponent;
  let fixture: ComponentFixture<LastExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
