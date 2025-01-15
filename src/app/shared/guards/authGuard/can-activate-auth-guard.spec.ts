import { TestBed } from '@angular/core/testing';

import { canActivateAuthGuard } from './can-activate-auth-guard';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('canActivateAuthGuard', () => {
  let authGuard: canActivateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    authGuard = TestBed.inject(canActivateAuthGuard);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });
});
