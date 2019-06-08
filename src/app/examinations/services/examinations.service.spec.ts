import { TestBed } from '@angular/core/testing';

import { ExaminationsService } from './examinations.service';

describe('ExaminationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExaminationsService = TestBed.get(ExaminationsService);
    expect(service).toBeTruthy();
  });
});
