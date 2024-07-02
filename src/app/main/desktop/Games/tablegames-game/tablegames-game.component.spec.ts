import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegamesGameComponent } from './tablegames-game.component';

describe('TablegamesGameComponent', () => {
  let component: TablegamesGameComponent;
  let fixture: ComponentFixture<TablegamesGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablegamesGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablegamesGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
