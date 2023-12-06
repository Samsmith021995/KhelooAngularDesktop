import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMainComponent } from './mobile-main.component';

describe('MobileMainComponent', () => {
  let component: MobileMainComponent;
  let fixture: ComponentFixture<MobileMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
