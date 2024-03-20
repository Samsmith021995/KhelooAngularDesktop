import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPromotionComponent } from './m-promotion.component';

describe('MPromotionComponent', () => {
  let component: MPromotionComponent;
  let fixture: ComponentFixture<MPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MPromotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
