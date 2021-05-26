import { TestBed } from '@angular/core/testing';

import { GqlMutationService } from './gql-mutation.service';

describe('GqlMutationService', () => {
  let service: GqlMutationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GqlMutationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
