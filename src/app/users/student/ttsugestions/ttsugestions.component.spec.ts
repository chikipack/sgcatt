import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtsugestionsComponent } from './ttsugestions.component';

describe('TtsugestionsComponent', () => {
  let component: TtsugestionsComponent;
  let fixture: ComponentFixture<TtsugestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TtsugestionsComponent]
    });
    fixture = TestBed.createComponent(TtsugestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
