import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionPopupComponent } from './promotion-popup.component';

describe('PromotionPopupComponent', () => {
  let component: PromotionPopupComponent;
  let fixture: ComponentFixture<PromotionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromotionPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
