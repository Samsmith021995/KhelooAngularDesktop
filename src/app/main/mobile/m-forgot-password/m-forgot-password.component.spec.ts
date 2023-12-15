import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MForgotPasswordComponent } from './m-forgot-password.component';

describe('MForgotPasswordComponent', () => {
  let component: MForgotPasswordComponent;
  let fixture: ComponentFixture<MForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MForgotPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
