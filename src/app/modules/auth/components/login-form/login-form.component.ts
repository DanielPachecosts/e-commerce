import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestStatus } from 'src/app/models/requestStatus.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  status: RequestStatus = 'init';

  loginForm = this.formBuilder.nonNullable.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.nullValidator],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenService: TokenService
  ) {}

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  submit() {
    if (this.loginForm.valid) {
      this.status = 'loading';
      const { email, password } = this.loginForm.getRawValue();
      this.authService.login(email, password).subscribe({
        next: (data) => {
          this.status = 'success';
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.status = 'failed';
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
