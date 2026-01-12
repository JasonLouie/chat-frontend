import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
    @Input({ required: true }) control!: FormControl;
    @Input() label: string = "";
    @Input({ required: true }) name!: string;
    @Input() type: "text" | "email" | "number" = "text";
    @Input() isRequired: boolean = false;

    @Input() customErrors: Record<string, string> = {};

    private defaultMessages: Record<string, string> = {
        required: "This field is required.",
        email: "Invalid email address.",
        minlength: "Value is too short.",
        maxlength: "Value is too long",
        pattern: "Invalid format."
    };

    get errorMessages(): string[] {
        if (!this.control.errors || (!this.control.touched && !this.control.dirty)) {
            return [];
        }

        return Object.keys(this.control.errors).map(key => {
            return this.customErrors[key] || this.defaultMessages[key] || `Invalid value (${key})`;
        });
    }
}
