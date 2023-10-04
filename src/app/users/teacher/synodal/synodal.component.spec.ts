import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynodalComponent } from './synodal.component';

describe('SynodalComponent', () => {
  let component: SynodalComponent;
  let fixture: ComponentFixture<SynodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynodalComponent]
    });
    fixture = TestBed.createComponent(SynodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
