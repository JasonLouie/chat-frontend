import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { createPasswordValidator } from '../../../core/validators/password.validator';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import { createUsernameValidator } from '../../../core/validators/username.validator';
import { createDisplayNameValidator } from '../../../core/validators/displayName.validator';
import { TextInputComponent } from '../../../shared/components/text-input/text-input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordInputComponent, RouterLink, TextInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    displayName: new FormControl('', [createDisplayNameValidator()]),
    username: new FormControl('', [Validators.required, createUsernameValidator()]),
    password: new FormControl('', [Validators.required, createPasswordValidator()]),
  });

  // Custom messages
  emailErrors = {
    required: 'Email is required.',
  };

  displayNameErrors = {
    displayNameMinLength: 'Display name must be at least 2 characters.',
    displayNameMaxLength: 'Display name cannot exceed 30 characters.',
  };

  usernameErrors = {
    required: 'Username is required.',
    usernamePattern: 'Only letters, numbers, dots (.), and underscores (_) are allowed.',
    usernameMinLength: 'Username must be at least 3 characters.',
    usernameMaxLength: 'Username cannot exceed 20 characters.',
  };

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form data:', this.registerForm.value);
      // AuthService logic
    } else {
      console.log('Form is invalid');
      this.registerForm.markAllAsTouched();
    }
  }

  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get displayNameControl(): FormControl {
    return this.registerForm.get('displayName') as FormControl;
  }
  get usernameControl(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
}
