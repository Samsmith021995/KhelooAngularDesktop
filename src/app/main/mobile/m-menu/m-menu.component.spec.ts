import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMenuComponent } from './m-menu.component';

describe('MMenuComponent', () => {
  let component: MMenuComponent;
  let fixture: ComponentFixture<MMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
