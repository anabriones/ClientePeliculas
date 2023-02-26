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
  uri = 'http://localhost:8000/auth-token/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  public login(email: string, password: string) {
    this.http.post(this.uri, { email: email, password: password }).subscribe({
      next: (resp: any) => {
        sessionStorage.setItem('auth_token', resp.token);
        sessionStorage.setItem('miTokenPersonalnombre', email);

        this.tokenService.setToken(resp.token);
        sessionStorage.setItem('nombreUsuario', email);
        this.router.navigate(['/menu']);
      },

      error: (error: Error) => {
        alert('Usuario o contraseña no valido');
        console.log('Ha habido un error con el login' + error);
      }
    });
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
    return this.http.get<usuarioInterface>(
      `http://localhost:8000/profile/${email}`
    );
  }
}
