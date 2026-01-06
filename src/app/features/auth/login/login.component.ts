import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl("", [
            Validators.required
        ]),
        password: new FormControl("", [
            Validators.required
        ])
    });

    onSubmit() {
        if (this.loginForm.valid) {
            console.log("Form data:", this.loginForm.value);
            // AuthService logic
        } else {
            console.log("Form is invalid");
            this.loginForm.markAllAsTouched(); // Triggers error messages to pop up
        }
    }

    get username() { return this.loginForm.get("username"); }
    get password() { return this.loginForm.get("password"); }
}
