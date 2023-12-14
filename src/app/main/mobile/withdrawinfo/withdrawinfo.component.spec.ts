import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawinfoComponent } from './withdrawinfo.component';

describe('WithdrawinfoComponent', () => {
  let component: WithdrawinfoComponent;
  let fixture: ComponentFixture<WithdrawinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
