import { TestBed } from '@angular/core/testing';

import { DoctorAppointmentService } from './doctor-appointment.service';

describe('DoctorAppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorAppointmentService = TestBed.get(DoctorAppointmentService);
    expect(service).toBeTruthy();
  });
});
