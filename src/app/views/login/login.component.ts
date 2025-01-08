import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormComponent} from '@shared/components/form/form.component';
import {InputComponent} from '@shared/components/input/input.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import {ButtonComponent} from '@shared/components/button/button.component';
import {CommonModule} from '@angular/common';
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from '@shared/services/authentication/authentication.service';
import {Router} from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import {of, switchMap} from "rxjs";
import {isUndefined} from "@shared/utils/utils";

@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  backgroundImage = 'assets/images/login-walkpaper.png';
  private authenticationService = inject(AuthenticationService)
  private toastr = inject(ToastrService)
  private router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loading = signal(false);
  disabled = toSignal(this.loginForm.valueChanges.pipe(switchMap(() => of(!(this.loginForm.valid && !!this.loginForm.value.email && !!this.loginForm.value.password)))), { initialValue: true });

  login() {
    if (!!this.loginForm.value.email && !!this.loginForm.value.password) {
      this.loading.set(true);
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response) => {
          if (response.accessToken) {
              this.toastr.success("Connexion réussie! Bienvenue 🚀");
            localStorage.setItem('userToken', response.accessToken);
            this.router.navigate(['/dashboard']);
          }
        },
        error: () => {
          console.log('HTTP Error : login failed');
          this.toastr.error("Une erreur s'est produite. Veuillez réessayer. 📛");
          this.loading.set(false);
        },
        complete: () => {
          this.loading.set(false);
        }
      });
    }
  }

  protected readonly isUndefined = isUndefined;
}
