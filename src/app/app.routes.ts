import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '@shared/services/authentication/authentication.service';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { isNotAuthenticatedGuard } from '@shared/guards/authGuard/is-not-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [isNotAuthenticatedGuard],
    loadComponent: () =>
      import('@app/views/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'dashboard',
    canActivate: [() => inject(AuthenticationService).isAuthenticated()],
    loadChildren: () =>
      import('@app/views/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  { path: '**', component: PageNotFoundComponent },
];
