import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawPopComponent } from './withdraw-pop.component';

describe('WithdrawPopComponent', () => {
  let component: WithdrawPopComponent;
  let fixture: ComponentFixture<WithdrawPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawPopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
