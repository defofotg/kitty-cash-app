import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent], // Pas besoin d'importer FormControl ici
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'], // Correction de 'styleUrl' en 'styleUrls'
})
export class FormComponent {}
