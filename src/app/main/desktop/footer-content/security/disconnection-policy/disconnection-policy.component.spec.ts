import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectionPolicyComponent } from './disconnection-policy.component';

describe('DisconnectionPolicyComponent', () => {
  let component: DisconnectionPolicyComponent;
  let fixture: ComponentFixture<DisconnectionPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisconnectionPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisconnectionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
