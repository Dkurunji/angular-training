import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransactionsComponent } from './get-transactions.component';

describe('GetTransactionsComponent', () => {
  let component: GetTransactionsComponent;
  let fixture: ComponentFixture<GetTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTransactionsComponent]
    });
    fixture = TestBed.createComponent(GetTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
