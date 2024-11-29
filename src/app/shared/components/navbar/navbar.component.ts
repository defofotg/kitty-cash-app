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
  
  
  

  constructor(private router: Router, private authenticationService:AuthenticationService) {}

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


   handlelogout() {
    this.loading = true ;
   
    
    this.authenticationService.logout().subscribe({
    next:() => {
        console.log('HTTP response : DECONNEXION REUSSIE.');
      },
      error: () => {
        console.log('HTTP Error : échec de la déconnexion');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }



 
}
