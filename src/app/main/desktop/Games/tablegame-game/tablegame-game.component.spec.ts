import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegameGameComponent } from './tablegame-game.component';

describe('TablegameGameComponent', () => {
  let component: TablegameGameComponent;
  let fixture: ComponentFixture<TablegameGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablegameGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablegameGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
