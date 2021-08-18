import { TestBed } from '@angular/core/testing';

import { VehicleLoggingFilterService } from './filter.service';

describe('VehicleLoggingFilterService', () => {
  let service: VehicleLoggingFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleLoggingFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
