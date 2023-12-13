import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplBettingComponent } from './ipl-betting.component';

describe('IplBettingComponent', () => {
  let component: IplBettingComponent;
  let fixture: ComponentFixture<IplBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IplBettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IplBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
