import { TestBed } from '@angular/core/testing';

import { AppointmentRealisationService } from './appointment-realisation.service';

describe('AppointmentRealisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentRealisationService = TestBed.get(AppointmentRealisationService);
    expect(service).toBeTruthy();
  });
});
