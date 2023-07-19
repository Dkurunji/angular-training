import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationItemComponent } from './transation-item.component';

describe('TransationItemComponent', () => {
  let component: TransationItemComponent;
  let fixture: ComponentFixture<TransationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransationItemComponent]
    });
    fixture = TestBed.createComponent(TransationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
