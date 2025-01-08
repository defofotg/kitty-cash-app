import { canActivateAuthGuard } from './shared/Authoguard/canActivateAuth-guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';

import { LoginComponent } from './views/login/login.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[canActivateAuthGuard] },
  { path: 'cagnotte', component: CagnotteComponent,canActivate:[canActivateAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
