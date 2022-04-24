import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidatorsCustom from '../../../shared/helpers/validators';
import { AuthApplication } from '../../application/auth.application';
import { AuthEntity } from '../../domain/entities/auth.entity';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private router: Router,
    private authApplication: AuthApplication
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  login() {
    const { email, password } = this.formGroup.value;
    const auth = new AuthEntity(email, password, 'abcde');
    this.authApplication.login(auth);
  }

  loadForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        //ValidatorsCustom.validateEmailCompany,
        ValidatorsCustom.validateEmailCompanyCustom([
          '@correo.com',
          '@correo.com.ar',
        ]),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  validateForm() {
    this.formGroup.get('password')?.markAsTouched();
    this.formGroup.updateValueAndValidity();
  }
}
