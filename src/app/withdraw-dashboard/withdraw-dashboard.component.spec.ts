import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawDashboardComponent } from './withdraw-dashboard.component';

describe('WithdrawDashboardComponent', () => {
  let component: WithdrawDashboardComponent;
  let fixture: ComponentFixture<WithdrawDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawDashboardComponent]
    });
    fixture = TestBed.createComponent(WithdrawDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
