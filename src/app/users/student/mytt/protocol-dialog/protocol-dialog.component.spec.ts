import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolDialogComponent } from './protocol-dialog.component';

describe('ProtocolDialogComponent', () => {
  let component: ProtocolDialogComponent;
  let fixture: ComponentFixture<ProtocolDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtocolDialogComponent]
    });
    fixture = TestBed.createComponent(ProtocolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
