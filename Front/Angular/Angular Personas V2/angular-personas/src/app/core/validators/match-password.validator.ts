import { AbstractControl } from "@angular/forms";

export class MatchPasswordValidator {

    static validate(control: AbstractControl) {
        const password = control.get('password')?.value;
        const verifyPassword = control.get('passwordVerify')?.value;
        if (password === verifyPassword)
            return null;
        return { matchPassword: true };
    }

}