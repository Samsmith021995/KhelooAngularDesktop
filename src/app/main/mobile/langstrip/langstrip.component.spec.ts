import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangstripComponent } from './langstrip.component';

describe('LangstripComponent', () => {
  let component: LangstripComponent;
  let fixture: ComponentFixture<LangstripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangstripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangstripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
