import { TestBed } from '@angular/core/testing';

import { GqlQueryService } from './gql-query.service';

describe('GqlQueryService', () => {
  let service: GqlQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GqlQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
