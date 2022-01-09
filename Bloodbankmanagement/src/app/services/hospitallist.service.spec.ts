import { TestBed } from '@angular/core/testing';

import { HospitallistService } from './hospitallist.service';

describe('HospitallistService', () => {
  let service: HospitallistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitallistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
