import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballBettingComponent } from './football-betting.component';

describe('FootballBettingComponent', () => {
  let component: FootballBettingComponent;
  let fixture: ComponentFixture<FootballBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootballBettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
