import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';

import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cagnotte', component: CagnotteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
