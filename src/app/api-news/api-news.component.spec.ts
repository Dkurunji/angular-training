import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNewsComponent } from './api-news.component';

describe('ApiNewsComponent', () => {
  let component: ApiNewsComponent;
  let fixture: ComponentFixture<ApiNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiNewsComponent]
    });
    fixture = TestBed.createComponent(ApiNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
