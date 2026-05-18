import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth';

import { LoginRequest } from '../../../core/models/auth/login-request.model';

import { MatCardModule }
  from '@angular/material/card';

import { MatInputModule }
  from '@angular/material/input';

import { MatButtonModule }
  from '@angular/material/button';

import { MatFormFieldModule }
  from '@angular/material/form-field';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [

    FormsModule,

    MatCardModule,

    MatInputModule,

    MatButtonModule,

    MatFormFieldModule
  ],

  templateUrl: './login.html',

  styleUrl: './login.scss'
})
export class LoginComponent {

  loginRequest: LoginRequest = {

    email: '',

    password: ''
  };

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

  login(): void {

    this.authService
      .login(this.loginRequest)
      .subscribe({

        next: (response) => {

          this.authService
            .saveToken(response.token);

          this.router.navigate([
            '/dashboard'
          ]);
        },

        error: (err) => {

          console.error(err);

          alert('Invalid credentials');
        }
      });
  }
}
