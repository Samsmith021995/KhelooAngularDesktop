import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsGameComponent } from './sports-game.component';

describe('SportsGameComponent', () => {
  let component: SportsGameComponent;
  let fixture: ComponentFixture<SportsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
