import { usuarioInterface } from './../interfaces/usuarioInterface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {}
  public login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      `http://localhost:8000/auth-token/login`,
      { email: email, password: password },
      { headers }
    );
  }

  public registrar(usuario: usuarioInterface): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      `http://localhost:8000/profile/register`,
      usuario
    );
  }

  public obtenerUsuario(email: string): Observable<usuarioInterface> {
    const headers = new HttpHeaders({
      Authorization: 'JWT ' + sessionStorage.getItem('auth_token')
    });
    headers.append('Content-Type', 'application/json');
    return this.http.get<usuarioInterface>(
      `http://localhost:8000/profile/${email}`, {headers}
    );
  }

  public modificarusuario(usuario: usuarioInterface): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'JWT ' + sessionStorage.getItem('auth_token')
    });
    headers.append('Content-Type', 'application/json');

    return this.http.put<any>(
      `http://localhost:8000/profile/${usuario.email}`,
      usuario,
      { headers }
    );
  }

}
