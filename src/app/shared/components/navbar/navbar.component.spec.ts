import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  //verifions que le composant navbarcomponent est bien creer
  it('devrait créer le composant', () => {
    expect(component).toBeTruthy(); 
  });

  // verifions que les initiales de georges defo sont affichees correctement.
  it('devrait afficher les initiales de l\'utilisateur', () => {
    const initialsElement = fixture.debugElement.query(By.css('.w-10.h-10')).nativeElement;
    expect(initialsElement.textContent.trim()).toBe('GD');
  });

  // Vérifions que la méthode toggleDropdown()ouvre et ferme correctement le menu déroulant de deconnection sur le profil de l'utilisateur
  it('devrait basculer le menu déroulant lorsque toggleDropdown() est appelé', () => {
    expect(component.isDropdownOpen).toBe(false);
    
    //Ouvre le menu
    component.toggleDropdown(); 
    fixture.detectChanges(); // le changement dans l'interface après l'exécution de la méthode.
    expect(component.isDropdownOpen).toBe(true);

    //Ferme le menu
    component.toggleDropdown();
    fixture.detectChanges();  // le changement dans l'interface après l'exécution de la méthode.
    expect(component.isDropdownOpen).toBe(false);
  });

// // Vérifions que la méthode logout()redirige l'utilisateur vers la page de connexion et supprime le userToken.
//   it('devrait rediriger l\'utilisateur vers la page de connexion lors de la déconnexion', () => {
//     const navigateSpy = jest.spyOn(router, 'navigate'); 
//     component.logout();
//     expect(navigateSpy).toHaveBeenCalledWith(['/login']); // Vérifions que l'utilisateur est bien redirigé vers le login.
//     expect(localStorage.getItem('userToken')).toBeNull(); // le token de l'utilisateur est bien supprimé du localStorage.
//   });
  

  it('devrait afficher les liens du menu Home et Cagnotte', () => {
    const homeLink = fixture.debugElement.query(By.css('a[routerLink="/home"]')).nativeElement;
    const cagnotteLink = fixture.debugElement.query(By.css('a[routerLink="/cagnotte"]')).nativeElement;

    expect(homeLink.textContent).toContain('Home');
    expect(cagnotteLink.textContent).toContain('Cagnotte');
  });
});
