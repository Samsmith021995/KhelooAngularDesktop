import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStatementComponent } from './m-statement.component';

describe('MStatementComponent', () => {
  let component: MStatementComponent;
  let fixture: ComponentFixture<MStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
