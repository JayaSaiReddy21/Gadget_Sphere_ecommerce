import { TestBed } from '@angular/core/testing';

import { HardcoreAuthenticationService } from './hardcore-authentication.service';

describe('HardcoreAuthenticationService', () => {
  let service: HardcoreAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcoreAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
