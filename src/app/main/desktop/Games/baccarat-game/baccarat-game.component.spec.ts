import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaccaratGameComponent } from './baccarat-game.component';

describe('BaccaratGameComponent', () => {
  let component: BaccaratGameComponent;
  let fixture: ComponentFixture<BaccaratGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaccaratGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaccaratGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
