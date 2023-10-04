import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtlibraryComponent } from './ttlibrary.component';

describe('TtlibraryComponent', () => {
  let component: TtlibraryComponent;
  let fixture: ComponentFixture<TtlibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TtlibraryComponent]
    });
    fixture = TestBed.createComponent(TtlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
