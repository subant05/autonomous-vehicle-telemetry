import { TestBed } from '@angular/core/testing';

import { GqlSubscriptionService } from './gql-subscription.service';

describe('GqlSubscriptionService', () => {
  let service: GqlSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GqlSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
