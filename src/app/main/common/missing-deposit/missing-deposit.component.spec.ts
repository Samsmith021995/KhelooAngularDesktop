import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingDepositComponent } from './missing-deposit.component';

describe('MissingDepositComponent', () => {
  let component: MissingDepositComponent;
  let fixture: ComponentFixture<MissingDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissingDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
