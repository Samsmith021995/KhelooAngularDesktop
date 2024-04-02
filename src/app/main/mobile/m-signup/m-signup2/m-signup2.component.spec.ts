import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSignup2Component } from './m-signup2.component';

describe('MSignup2Component', () => {
  let component: MSignup2Component;
  let fixture: ComponentFixture<MSignup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MSignup2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MSignup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
