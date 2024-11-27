import { TestBed } from '@angular/core/testing';

import { canactivateauthGuard } from './canactivateauth.guard';

describe('canactivateauthGuard', () => {
  let Authoguard: canactivateauthGuard;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    Authoguard=TestBed.inject(canactivateauthGuard);
  });

  it('should be created', () => {
    expect(Authoguard).toBeTruthy();
  });
});
