import { TestBed } from '@angular/core/testing';

import { EmployerFormService } from './employer-form.service';

describe('EmployerFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployerFormService = TestBed.get(EmployerFormService);
    expect(service).toBeTruthy();
  });
});
