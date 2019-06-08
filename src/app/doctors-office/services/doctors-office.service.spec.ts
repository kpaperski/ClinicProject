import { TestBed } from '@angular/core/testing';

import { DoctorsOfficeService } from './doctors-office.service';

describe('DoctorsOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorsOfficeService = TestBed.get(DoctorsOfficeService);
    expect(service).toBeTruthy();
  });
});
