import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createDisplayNameValidator(min = 2, max = 30): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const errors: ValidationErrors = {};

        if (value.length < min) {
            errors["displayNameMinLength"] = { required: min, actual: value.length };
        }

        if (value.length > max) {
            errors["displayNameMaxLength"] = { required: max, actual: value.length };
        }

        return Object.keys(errors).length > 0 ? errors : null;
    }
}