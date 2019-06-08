import { TestBed } from '@angular/core/testing';

import { PatientCardService } from './patient-card.service';

describe('PatientCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientCardService = TestBed.get(PatientCardService);
    expect(service).toBeTruthy();
  });
});
