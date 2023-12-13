import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisBettingComponent } from './tennis-betting.component';

describe('TennisBettingComponent', () => {
  let component: TennisBettingComponent;
  let fixture: ComponentFixture<TennisBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TennisBettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TennisBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
