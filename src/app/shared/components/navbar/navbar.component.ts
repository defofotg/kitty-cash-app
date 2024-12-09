import { LogoutService } from './../../services/logout/logout.service';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule,RouterModule],
})
export class NavbarComponent {
  user = { firstName: 'george', lastName: 'Defo' };
  isDropdownOpen = false;
  loading: boolean = false;
  
  
  

  constructor(private router: Router, private LogoutService:LogoutService) {}

//Méthode qui renvoie les initiales de l'utilisateur ex:GD.
  getInitials(): string {
    const { firstName, lastName } = this.user;
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

   
   @HostListener('document:click', ['$event'])
   handleOutsideClick(event: Event) {
     const elementCible = event.target as HTMLElement;
     const ClickdansMenu = elementCible.closest('.dropdown');
 
     if (!ClickdansMenu && this.isDropdownOpen) {
       this.isDropdownOpen = false;
     }
   }


   handleLogout(): void {
    this.loading = true;
  
    const authToken = localStorage.getItem('userToken') || '';
    this.LogoutService.logout(authToken).subscribe({
      next: () => {
        console.log('Déconnexion réussie.');
        localStorage.clear();
        this.router.navigate(['/login']);
      },
      error: () => {
        console.error('Erreur lors de la déconnexion.');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  



 
}
