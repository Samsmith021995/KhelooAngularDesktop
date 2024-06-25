import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCategoryComponent } from './games-category.component';

describe('GamesCategoryComponent', () => {
  let component: GamesCategoryComponent;
  let fixture: ComponentFixture<GamesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
