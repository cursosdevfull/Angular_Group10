import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidatorsCustom from '../../../shared/helpers/validators';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadForm();
  }

  login() {
    this.router.navigate(['/dashboard']);
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
