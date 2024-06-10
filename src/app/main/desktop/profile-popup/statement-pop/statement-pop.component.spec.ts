import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementPopComponent } from './statement-pop.component';

describe('StatementPopComponent', () => {
  let component: StatementPopComponent;
  let fixture: ComponentFixture<StatementPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatementPopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatementPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
