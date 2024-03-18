import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesProviderWiseComponent } from './games-provider-wise.component';

describe('GamesProviderWiseComponent', () => {
  let component: GamesProviderWiseComponent;
  let fixture: ComponentFixture<GamesProviderWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesProviderWiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesProviderWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
