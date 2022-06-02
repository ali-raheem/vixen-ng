import { TestBed } from '@angular/core/testing';

import { HashcashService } from './hashcash.service';

describe('HashcashService', () => {
  let service: HashcashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HashcashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
