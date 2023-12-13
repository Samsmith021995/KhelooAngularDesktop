import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketBettingComponent } from './cricket-betting.component';

describe('CricketBettingComponent', () => {
  let component: CricketBettingComponent;
  let fixture: ComponentFixture<CricketBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CricketBettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricketBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
