import { TestBed } from '@angular/core/testing';

import { BankserverService } from './bankserver.service';

describe('BankserverService', () => {
  let service: BankserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
