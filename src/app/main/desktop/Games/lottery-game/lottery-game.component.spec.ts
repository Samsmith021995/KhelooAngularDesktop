import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryGameComponent } from './lottery-game.component';

describe('LotteryGameComponent', () => {
  let component: LotteryGameComponent;
  let fixture: ComponentFixture<LotteryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LotteryGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LotteryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
