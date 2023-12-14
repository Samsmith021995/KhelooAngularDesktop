import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSportsBettingComponent } from './online-sports-betting.component';

describe('OnlineSportsBettingComponent', () => {
  let component: OnlineSportsBettingComponent;
  let fixture: ComponentFixture<OnlineSportsBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineSportsBettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineSportsBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
