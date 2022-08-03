import { TestBed } from '@angular/core/testing';

import { EchantillonServicesService } from './echantillon-services.service';

describe('EchantillonServicesService', () => {
  let service: EchantillonServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchantillonServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
