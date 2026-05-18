import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoginRequest } from '../models/auth/login-request.model';

import { AuthResponse } from '../models/auth/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =
    'http://localhost:8080/auth';

  constructor(
    private http: HttpClient
  ) {}

  login(
    request: LoginRequest
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      request
    );
  }

  saveToken(token: string): void {

    localStorage.setItem(
      'token',
      token
    );
  }

  getToken(): string | null {

    return localStorage.getItem(
      'token'
    );
  }

  logout(): void {

    localStorage.removeItem(
      'token'
    );
  }

  isAuthenticated(): boolean {

    return !!this.getToken();
  }
}
