import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputId? = '';
  @Input() control = new FormControl();
  @Input() placeholder? = '';
  @Input() type: string = '';
  @Input() fullWidth?: boolean = false;
  @Input() border?: boolean = false;
  @Input() nameIconLeft?: string;
  @Input() nameIconRight?: string = '';
  @Input() inputSize?: string;

  errorMessages: Record<string, string> = {
    required: 'Ce champs est requit',
    email: 'Cet e-mail est invalid',
    password: 'Ce mot de passe est invalide',
    minlength: 'Le mot de passe doit comporter au moins 6 caractères',
  };

  // Méthode pour obtenir le thème de l'icône
  //  getIconTheme(): string {
  //      return this.iconTheme === 'black' ? 'text-black' : 'text-gray-500';
  //    }
  constructor() {}

  isPasswordVisible: boolean = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
