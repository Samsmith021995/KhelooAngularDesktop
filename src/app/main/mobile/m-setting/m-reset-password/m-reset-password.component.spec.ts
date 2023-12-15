import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MResetPasswordComponent } from './m-reset-password.component';

describe('MResetPasswordComponent', () => {
  let component: MResetPasswordComponent;
  let fixture: ComponentFixture<MResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MResetPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
