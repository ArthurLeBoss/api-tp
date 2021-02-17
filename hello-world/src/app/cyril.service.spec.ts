import { TestBed } from '@angular/core/testing';

import { CyrilService } from './cyril.service';

describe('CyrilService', () => {
  let service: CyrilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyrilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
