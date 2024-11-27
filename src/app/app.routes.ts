import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';

import { LoginComponent } from './views/login/login.component';
import { canactivateauthGuard } from './shared/Authoguard/canactivateauth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[canactivateauthGuard] },
  { path: 'cagnotte', component: CagnotteComponent,canActivate:[canactivateauthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
