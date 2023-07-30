import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseDashboardComponent } from './close-dashboard.component';

describe('CloseDashboardComponent', () => {
  let component: CloseDashboardComponent;
  let fixture: ComponentFixture<CloseDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseDashboardComponent]
    });
    fixture = TestBed.createComponent(CloseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
