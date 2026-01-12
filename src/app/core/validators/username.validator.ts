import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createUsernameValidator(min = 3, max = 20): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const errors: ValidationErrors = {};

        const isValidPattern = /^[a-zA-Z0-9_.]+$/.test(value);
        if (!isValidPattern) {
            errors["usernamePattern"] = true;
        }

        if (value.length < min) {
            errors["usernameMinLength"] = { required: min, actual: value.length };
        }

        if (value.length > max) {
            errors["usernameMaxLength"] = { required: max, actual: value.length };
        }

        return Object.keys(errors).length > 0 ? errors : null;
    }
}