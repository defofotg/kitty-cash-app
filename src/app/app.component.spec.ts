import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar/navbar.component'; 

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavbarComponent], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('devrait créer le composant de l\'application', () => {
        expect(component).toBeTruthy();
    });

    it('devrait rendre le composant Navbar', () => {
        const compiled = fixture.nativeElement; 
        expect(compiled.querySelector('app-navbar')).toBeTruthy(); // Vérification que le composant Navbar est présent.
    });

    it('devrait contenir un router outlet', () => {
        const compiled = fixture.nativeElement; 
        expect(compiled.querySelector('router-outlet')).toBeTruthy(); 
    });
});
