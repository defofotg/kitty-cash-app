import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant:
    | 'accent'
    | 'secondary'
    | 'outline'
    | 'disabled'
    | 'success'
    | 'danger' = 'accent';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth: boolean = false;
  @Output() action = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled && !this.isLoading) {
      this.action.emit();
    }
  }

  // Détermine les styles en fonction de la variante
  getVariantStyle(): string {
    switch (this.variant) {
      case 'accent':
        return 'bg-primary hover:bg-purple-600 text-white rounded';
      // case 'secondary':
      //   return 'bg-primary-200 hover:bg-primary-300/50 text-primary rounded';
      // case 'outline':
      //   return 'bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded';
      // case 'disabled':
      //   return 'bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed';
      // case 'success':
      //   return 'bg-success hover:bg-success-400 text-white rounded';
      // case 'danger':
      //   return 'bg-alert-danger hover:bg-alert-danger/85 text-white rounded';
      default:
        return '';
    }
  }

  // Styles basés sur la taille
  getSizeStyle(): string {
    switch (this.size) {
      case 'small':
        return 'px-[14px] py-[12px] text-caption3 font-medium';
      case 'medium':
        return 'px-[18px] py-[15px] text-caption2 font-medium';
      case 'large':
        return 'px-[22px] py-[18px] text-caption1 font-medium';
      default:
        return '';
    }
  }
}
