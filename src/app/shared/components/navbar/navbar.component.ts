import { AuthenticationService } from '../../services/authentication/authentication.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterLinkActive, RouterLink],
})
export class NavbarComponent {
  authService = inject(AuthenticationService);
  toasterService = inject(ToastrService);
  user = { firstName: 'george', lastName: 'Defo' };
  loading = signal(false);

  constructor(private router: Router) {}

  logout(): void {
    const authToken = localStorage.getItem('userToken');
    if (!authToken) {
      console.error('Token de déconnexion introuvable.');
      return;
    }

    this.loading.set(true);

    this.authService.logout(authToken).subscribe({
      next: (response: string) => {
        if (response) {
          this.toasterService.success(
            'Vous avez été déconnecté avec succès. 👋🏾',
          );
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.toasterService.error(
          'Impossible de vous déconnecter. Veuillez réessayer. 📛',
        );
        console.error('Erreur lors de la déconnexion.', err);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  getInitials(): string {
    const { firstName, lastName } = this.user;
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
}
