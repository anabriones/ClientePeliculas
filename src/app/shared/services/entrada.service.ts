import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  constructor(private httpClient: HttpClient) {}

  public eliminarEntradaS(entrada: Entrada): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'JWT ' + sessionStorage.getItem('auth_token')
    });
    headers.append('Content-Type', 'application/json');
    return this.httpClient.delete<any>(
      `http://localhost:8000/films/${entrada.nombre}`,
      { headers }
    );
  }

  public addPelicula(entrada: Entrada): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'JWT ' + sessionStorage.getItem('auth_token')
    });
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post<any>(`http://localhost:8000/films`, entrada, {
      headers
    });
  }

  public modificarEntradaS(entrada: Entrada): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'JWT ' + sessionStorage.getItem('auth_token')
    });
    headers.append('Content-Type', 'application/json');

    return this.httpClient.put<any>(
      `http://localhost:8000/films/${entrada.nombre}`,
      entrada,
      { headers }
    );
  }

  public recuperarEntradas(): Observable<Entrada[]> {
    return this.httpClient.get<Entrada[]>('http://localhost:8000/films');
  }

  public recuperarEntrada(nombre: string): Observable<Entrada> {
    return this.httpClient.get<Entrada>(
      `http://localhost:8000/films/${nombre}`
    );
  }
}
