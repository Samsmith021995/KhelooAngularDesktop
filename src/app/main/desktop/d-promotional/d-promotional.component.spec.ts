import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPromotionalComponent } from './d-promotional.component';

describe('DPromotionalComponent', () => {
  let component: DPromotionalComponent;
  let fixture: ComponentFixture<DPromotionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DPromotionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DPromotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
