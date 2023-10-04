import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtcalendarComponent } from './ttcalendar.component';

describe('TtcalendarComponent', () => {
  let component: TtcalendarComponent;
  let fixture: ComponentFixture<TtcalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TtcalendarComponent]
    });
    fixture = TestBed.createComponent(TtcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
