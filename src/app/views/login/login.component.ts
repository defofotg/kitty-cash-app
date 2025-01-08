import {Component} from '@angular/core';
import {FormComponent} from '../../shared/components/form/form.component';
import {InputComponent} from '../../shared/components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {ButtonComponent} from '../../shared/components/button/button.component';
import {CommonModule} from '@angular/common';
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from '../../shared/services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loading = false;
  disabled = true;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private router: Router) {
    this.loginForm.valueChanges.subscribe(() => {
      this.disabled = !(
        this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password
      );
    });
  }


  handleButtonClick() {
    if (!!this.loginForm.value.email && !!this.loginForm.value.password) {
      this.loading = true;
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response) => {
          if (response.accessToken) {
            this.toastr.success("Login Successful");
            localStorage.setItem('userToken', response.accessToken);
            this.router.navigate(['/home']);
          }
        },
        error: () => {
          console.log('HTTP Error : login failed');
          this.toastr.error("Login failed");
        },
        complete: () => {
          this.loading = false
        }
      })
    }
  }
}
