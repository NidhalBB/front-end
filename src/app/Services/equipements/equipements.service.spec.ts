import { TestBed } from '@angular/core/testing';

import { EquipementsService } from './equipements.service';

describe('EquipementsService', () => {
  let service: EquipementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
