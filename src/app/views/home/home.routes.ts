import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(c => c.HomeComponent),
    children: [
      {
        path: '',
        redirectTo: 'overview', // Redirect to 'overview' by default
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadComponent: () => import('../overview/overview.component').then(c => c.OverviewComponent)
      },
      {
        path: 'cagnottes',
        loadComponent: () => import('../cagnotte/cagnotte.component').then(c => c.CagnotteComponent)
      },
    ]
  },
];
