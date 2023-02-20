import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:8000/auth-token/login';

  uri2 = 'http://localhost:8000/profile/register';

  constructor(private http: HttpClient,
    private router: Router,
    private tokenService: TokenService) {}


  public login(email: string, password: string)  {
     this.http
      .post(this.uri , { email: email, password: password })
      .subscribe((resp: any) => {

        sessionStorage.setItem('auth_token', resp.token);
        sessionStorage.setItem('miTokenPersonalnombre',email);


        this.tokenService.setToken(resp.token);
        sessionStorage.setItem('nombreUsuario', email);
        this.router.navigate(['/menu']);
      },

      (resp: Error) => {
        alert("Usuario o contraseña no valido");
      });

  }


  public registrar(email: string, password: string)  {
    this.http
     .post(this.uri2 , { email: email, password: password })
     .subscribe(
      () => {}
     ,

     (resp: Error) => {
       alert("El usuario ya existe ");
     });

 }


}
