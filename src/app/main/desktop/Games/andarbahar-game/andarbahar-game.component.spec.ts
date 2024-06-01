import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndarbaharGameComponent } from './andarbahar-game.component';

describe('AndarbaharGameComponent', () => {
  let component: AndarbaharGameComponent;
  let fixture: ComponentFixture<AndarbaharGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AndarbaharGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndarbaharGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
