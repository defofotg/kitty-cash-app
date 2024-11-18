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
import {ToastrService} from "ngx-toastr";

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
    // chekbox: new FormControl(false, [Validators.requiredTrue]),
  });

  loading = false;
  desable = true;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService) {
    this.loginForm.valueChanges.subscribe(() => {
      this.desable = !(
        this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password
      );

      console.log(this.loginForm);
    });
  }


  handleButtonClick() {
    if (!!this.loginForm.value.email && !!this.loginForm.value.password) {
      this.loading = true;
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
          next:() => {
            console.log('HTTP response : login Successful');
            this.toastr.success("Login Successful");
            } ,
          error: ()=>  {console.log('HTTP Error : login failed')},
          complete: ()=> {this.loading = false}
        })
    }
  }


}


