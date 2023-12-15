import { TestBed } from '@angular/core/testing';

import { ComFunService } from './com-fun.service';

describe('ComFunService', () => {
  let service: ComFunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComFunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
