import { Component } from '@angular/core';
import { FormComponent } from '../../shared/components/form/form.component';
import { InputComponent } from '../../shared/components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

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
    chekbox: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor( private authenticationService: AuthenticationService ) {
    this.loginForm.valueChanges.subscribe(() => console.log(this.loginForm));
  }

  loading = false;

  
  handleButtonClick() {
    if (!!this.loginForm.value.email && !!this.loginForm.value.password) {
      this.loading = true;
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
          next:(response) => {console.log('HTTP response : LOGIN SECCESSFULL');
            if (response.accessToken) {
              localStorage.setItem('userToken', response.accessToken);}
          } ,
          error: ()=>  {console.log('HTTP Error : loginfaild')},
          complete: ()=> {this.loading = false}
        })
    }
  }
    
  
}
