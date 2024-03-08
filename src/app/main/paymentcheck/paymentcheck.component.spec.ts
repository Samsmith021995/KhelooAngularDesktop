import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcheckComponent } from './paymentcheck.component';

describe('PaymentcheckComponent', () => {
  let component: PaymentcheckComponent;
  let fixture: ComponentFixture<PaymentcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentcheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
