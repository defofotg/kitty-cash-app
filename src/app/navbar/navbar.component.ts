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
  

  constructor(private router: Router) {}

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

  //Méthode qui sert à déconnecter l'utilisateur. Elle supprime le userToken(un jeton qui identifie l'utilisateur) du localStorage et redirige l'utilisateur vers la page de connexion en utilisant this.router.navigate(['/login']).
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

 
}
