import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMainComponent } from './desktop-main.component';

describe('DesktopMainComponent', () => {
  let component: DesktopMainComponent;
  let fixture: ComponentFixture<DesktopMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
