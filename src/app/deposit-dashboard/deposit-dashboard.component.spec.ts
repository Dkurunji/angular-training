import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDashboardComponent } from './deposit-dashboard.component';

describe('DepositDashboardComponent', () => {
  let component: DepositDashboardComponent;
  let fixture: ComponentFixture<DepositDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositDashboardComponent]
    });
    fixture = TestBed.createComponent(DepositDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
