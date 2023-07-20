import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingServicesComponent } from './banking-services.component';

describe('BankingServicesComponent', () => {
  let component: BankingServicesComponent;
  let fixture: ComponentFixture<BankingServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingServicesComponent]
    });
    fixture = TestBed.createComponent(BankingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
