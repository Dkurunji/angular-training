import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDashboardComponent } from './signup-dashboard.component';

describe('SignupDashboardComponent', () => {
  let component: SignupDashboardComponent;
  let fixture: ComponentFixture<SignupDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDashboardComponent]
    });
    fixture = TestBed.createComponent(SignupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
