import { TestBed } from '@angular/core/testing';

import { ParametreServicesService } from './parametre-services.service';

describe('ParametreServicesService', () => {
  let service: ParametreServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametreServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
