import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSignup1Component } from './m-signup1.component';

describe('MSignup1Component', () => {
  let component: MSignup1Component;
  let fixture: ComponentFixture<MSignup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MSignup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MSignup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
