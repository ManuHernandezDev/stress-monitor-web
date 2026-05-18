import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  // 1. Inyectamos el HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // 2. Ejecutamos la petición justo cuando la pantalla carga
  ngOnInit(): void {
    this.http.get(
      'http://localhost:8080/test',
      { responseType: 'text' }
    ).subscribe({
      next: response => {
        // Si sale bien, verás el texto de tu API en la consola del navegador
        console.log('Respuesta del servidor:', response);
      },
      error: err => {
        // Si algo falla, verás el error en rojo
        console.error('Ocurrió un error:', err);
      }
    });
  }

}


