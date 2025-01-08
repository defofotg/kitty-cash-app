import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {map, of} from "rxjs";
import {AuthenticationService} from "../../services/authentication/authentication.service";

export const isNotAuthenticatedGuard: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  return of(authService.isAuthenticated()).pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        router.navigate(['/dashboard']);
      }
      return !isAuthenticated;
    })
  );
};
