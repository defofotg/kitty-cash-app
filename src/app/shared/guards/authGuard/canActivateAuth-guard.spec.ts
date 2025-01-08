import { TestBed } from '@angular/core/testing';

import { canActivateAuthGuard } from './canActivateAuth-guard';

describe('canactivateauthGuard', () => {
  let Authoguard: canActivateAuthGuard;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    Authoguard=TestBed.inject(canActivateAuthGuard);
  });

  it('should be created', () => {
    expect(Authoguard).toBeTruthy();
  });
});
