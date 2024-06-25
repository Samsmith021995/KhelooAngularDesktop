import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToWithdrawComponent } from './how-to-withdraw.component';

describe('HowToWithdrawComponent', () => {
  let component: HowToWithdrawComponent;
  let fixture: ComponentFixture<HowToWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
