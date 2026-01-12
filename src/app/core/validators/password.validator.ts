import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordValidator(min = 8, max = 64): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumeric = /[0-9]/.test(value);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

        const isTooShort = value.length < min;
        const isTooLong = value.length > max;

        const passwordValid = 
            hasUpperCase && 
            hasLowerCase && 
            hasNumeric && 
            hasSpecial && 
            !isTooShort && 
            !isTooLong;

        return !passwordValid ? {
            passwordPolicy: {
                requiredMin: min,
                requiredMax: max,

                tooShort: isTooShort,
                tooLong: isTooLong,
                missingUpper: !hasUpperCase,
                missingLower: !hasLowerCase,
                missingNumeric: !hasNumeric,
                missingSpecial: !hasSpecial,
            }
        }: null;
    }
}