import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDepositComponent } from './m-deposit.component';

describe('MDepositComponent', () => {
  let component: MDepositComponent;
  let fixture: ComponentFixture<MDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
