import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DJackpotComponent } from './d-jackpot.component';

describe('DJackpotComponent', () => {
  let component: DJackpotComponent;
  let fixture: ComponentFixture<DJackpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DJackpotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DJackpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
