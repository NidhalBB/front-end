import { TestBed } from '@angular/core/testing';

import { CommercialService } from './commercial.service';

describe('CommercialService', () => {
  let service: CommercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
