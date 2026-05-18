import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Asegúrate de agregar el .service al final de la ruta
import { AuthService } from '../../core/services/auth';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar
  ], // Recuerda que si usas botones o menús de Material en tu HTML, debes importarlos aquí
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true
})
export class Navbar {

  // ¡Esta es la pieza clave que faltaba!
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
