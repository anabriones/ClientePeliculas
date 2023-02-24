import { usuarioInterface } from './../interfaces/usuarioInterface';
import { Usuario } from 'src/app/shared/classes/usuario';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:8000/auth-token/login';

  uri2 = 'http://localhost:8000/profile/register';



  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  public login(email: string, password: string) {
    this.http.post(this.uri, { email: email, password: password }).subscribe({
    next:  (resp: any) => {
        sessionStorage.setItem('auth_token', resp.token);
        sessionStorage.setItem('miTokenPersonalnombre', email);

        this.tokenService.setToken(resp.token);
        sessionStorage.setItem('nombreUsuario', email);
        this.router.navigate(['/menu']);
      },

  error:    (error: Error) => {
        alert('Usuario o contraseña no valido');
        console.log('Ha habido un error con el login' + error);
      }
    }
    );
  }

  public registrar(email: string, password: string) {
    this.http.post(this.uri2, { email: email, password: password }).subscribe({
    next:  () => {},
    error:  (error: Error) => {
        alert('El usuario ya existe ');
        console.log('Ha habido un error en el registro del usuario ' + error);
      }
    }
    );
  }
  public obtenerUsuario(email: string): Observable<usuarioInterface> {
  return   this.http.get<usuarioInterface>(`http://localhost:8000/profile/${email}`);
  }
}
