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
  islogin=false;
  
  

  constructor(private router: Router, private AuthenticationService:AuthenticationService) {}

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
    const authToken = localStorage.getItem('userToken');
    if (!authToken) {
      console.error('Token de déconnexion introuvable.');
      return; 
    }
  
    this.loading = true;
    this.AuthenticationService.logout(authToken).subscribe({
      next: (response: string) => {
        console.log('httpResponse :', response);
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
      },
      error: (err) => console.error('Erreur lors de la déconnexion.', err),
      complete: () => (this.loading = false),
    });
  }

  isLoggedIn(): boolean {
    return this.AuthenticationService.isLoggedIn();
  }
  
  
}
  



 

