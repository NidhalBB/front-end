import { TestBed } from '@angular/core/testing';

import { MinierService } from './minier.service';

describe('MinierService', () => {
  let service: MinierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
