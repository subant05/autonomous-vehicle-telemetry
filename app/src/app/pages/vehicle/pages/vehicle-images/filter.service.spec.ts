import { TestBed } from '@angular/core/testing';

import { VehicleImagesFilterService } from './filter.service';

describe('VehicleImagesFilterServiceService', () => {
  let service: VehicleImagesFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleImagesFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
