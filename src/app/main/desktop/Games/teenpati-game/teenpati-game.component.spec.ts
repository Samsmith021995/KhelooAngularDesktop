import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenpatiGameComponent } from './teenpati-game.component';

describe('TeenpatiGameComponent', () => {
  let component: TeenpatiGameComponent;
  let fixture: ComponentFixture<TeenpatiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeenpatiGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeenpatiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
