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

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    chekbox: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor() {
    this.formGroup.valueChanges.subscribe(() => console.log(this.formGroup));
  }

  /**to gerer les deux fonction
   */
  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Données du formulaire :', this.formGroup.value);
    } else {
      console.log('Le formulaire est invalide');
    }
  }

  loading = false;

  handleButtonClick() {
    this.loading = true;

    // Simule une requête API ou autre action
    setTimeout(() => {
      this.loading = false;
      console.log('Action du bouton exécutée');
    }, 2000);
  }
}
