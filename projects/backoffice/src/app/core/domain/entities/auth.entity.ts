export class AuthEntity {
  correo: string;
  password: string;
  recaptchaReactive: string;

  constructor(correo: string, password: string, recaptchaReactive: string) {
    this.correo = correo;
    this.password = password;
    this.recaptchaReactive = recaptchaReactive;
  }
}
