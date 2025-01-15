import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
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
  @Input() nameIconLeft?: string = '';
  @Input() nameIconRight?: string = '';
  @Input() inputSize?: string = '';

  errorMessages: Record<string, string> = {
    required: 'Ce champs est requis',
    email: 'Cet e-mail est invalide',
    password: 'Ce mot de passe est invalide',
    minlength: 'Le mot de passe doit comporter au moins 6 caractères',
  };

  isPasswordVisible: boolean = false;
  isFocused: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.type = this.isPasswordVisible ? 'text' : 'password';
  }

  @HostListener('focusin', ['$event'])
  onFocus() {
    this.isFocused = true;
  }

  @HostListener('focusout', ['$event'])
  onFocusout() {
    this.isFocused = false;
  }

  getBorderClass() {
    if (this.control.invalid && this.control.dirty) {
      return 'border-b-alert-danger';
    } else if (!this.isFocused) {
      return 'border-b-purple-900';
    } else {
      return 'border-b-purple-500';
    }
  }
}
