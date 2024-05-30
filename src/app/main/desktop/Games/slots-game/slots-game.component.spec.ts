import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsGameComponent } from './slots-game.component';

describe('SlotsGameComponent', () => {
  let component: SlotsGameComponent;
  let fixture: ComponentFixture<SlotsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlotsGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
