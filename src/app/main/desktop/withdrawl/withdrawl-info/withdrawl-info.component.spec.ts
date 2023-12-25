import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawlInfoComponent } from './withdrawl-info.component';

describe('WithdrawlInfoComponent', () => {
  let component: WithdrawlInfoComponent;
  let fixture: ComponentFixture<WithdrawlInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawlInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawlInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
