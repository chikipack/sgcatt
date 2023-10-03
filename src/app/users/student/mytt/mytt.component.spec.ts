import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyttComponent } from './mytt.component';

describe('MyttComponent', () => {
  let component: MyttComponent;
  let fixture: ComponentFixture<MyttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyttComponent]
    });
    fixture = TestBed.createComponent(MyttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
