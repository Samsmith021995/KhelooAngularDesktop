import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSignupComponent } from './m-signup.component';

describe('MSignupComponent', () => {
  let component: MSignupComponent;
  let fixture: ComponentFixture<MSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
