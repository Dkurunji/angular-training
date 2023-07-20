import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterDashboardComponent } from './currency-converter-dashboard.component';

describe('CurrencyConverterDashboardComponent', () => {
  let component: CurrencyConverterDashboardComponent;
  let fixture: ComponentFixture<CurrencyConverterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyConverterDashboardComponent]
    });
    fixture = TestBed.createComponent(CurrencyConverterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
