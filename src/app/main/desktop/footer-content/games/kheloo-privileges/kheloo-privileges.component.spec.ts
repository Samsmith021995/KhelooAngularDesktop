import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhelooPrivilegesComponent } from './kheloo-privileges.component';

describe('KhelooPrivilegesComponent', () => {
  let component: KhelooPrivilegesComponent;
  let fixture: ComponentFixture<KhelooPrivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhelooPrivilegesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhelooPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
