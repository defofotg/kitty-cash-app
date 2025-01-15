import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle password visibility', () => {
    component.type = 'password';
    component.isPasswordVisible = false;
    component.togglePasswordVisibility();
    expect(component.isPasswordVisible).toBeTruthy();
    expect(component.type).toBe('text');

    component.togglePasswordVisibility();
    expect(component.isPasswordVisible).toBeFalsy();
    expect(component.type).toBe('password');
  });

  it('should set isFocused to true on focus', () => {
    component.isFocused = false;
    component.onFocus();
    expect(component.isFocused).toBeTruthy();
  });

  it('should set isFocused to false on focusout', () => {
    component.isFocused = true;
    component.onFocusout();
    expect(component.isFocused).toBeFalsy();
  });

  it('should display error message when control is invalid and dirty', () => {
    component.control.setErrors({ required: true });
    component.control.markAsDirty();
    fixture.detectChanges();
    const errorMessage =
      fixture.nativeElement.querySelector('.text-alert-danger');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Ce champs est requis');
  });

  it('should not display error message when control is valid', () => {
    component.control.setErrors(null);
    component.control.markAsDirty();
    fixture.detectChanges();
    const errorMessage =
      fixture.nativeElement.querySelector('.text-alert-danger');
    expect(errorMessage).toBeNull();
  });
});
