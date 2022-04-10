import { FormControl } from '@angular/forms';

export default class ValidatorsCustom {
  static validateEmailCompany(control: FormControl) {
    if (!control.value) {
      return null;
    }

    if (control.value.trim().toLowerCase().indexOf('@correo.com') !== -1) {
      return null;
    }

    return { emailNotAllowed: true };
  }

  static validateEmailCompanyCustom(emailsDomainAllowed: string[]) {
    return (control: FormControl) => {
      if (!control.value) {
        return null;
      }

      const isUsingDomainAllowed = emailsDomainAllowed.some(
        (emailDomainAllowed: string) =>
          control.value.trim().toLowerCase().endsWith(emailDomainAllowed)
      );

      return isUsingDomainAllowed ? null : { emailNotAllowed: true };
    };
  }
}
