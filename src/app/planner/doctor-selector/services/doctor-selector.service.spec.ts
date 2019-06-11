import { TestBed } from '@angular/core/testing';

import { DoctorSelectorService } from './doctor-selector.service';

describe('DoctorSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorSelectorService = TestBed.get(DoctorSelectorService);
    expect(service).toBeTruthy();
  });
});
