import { TokenService } from './../../shared/services/token.service';
import { AuthService } from './../../shared/services/auth.service';
import { Usuario } from 'src/app/shared/classes/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;

  constructor(private router: Router,
     private authservice: AuthService, private tokenservice: TokenService) {
    this.usuario = {
      name: '',
      email: '',
      password: '',
      role: '',
      isActive: false
    };
  }


  ngOnInit(): void {

  }

  public submit(email: string, password: string): void {
    this.authservice.login(email, password).subscribe({
      next: (resp: any) => {
        sessionStorage.setItem('auth_token', resp.token);
        sessionStorage.setItem('miTokenPersonalnombre', email);

        this.tokenservice.setToken(resp.token);
        sessionStorage.setItem('nombreUsuario', email);
        this.router.navigate(['/menu']);
      },

      error: (error: Error) => {
        alert('Usuario o contraseña no valido');
        console.log('Ha habido un error con el login' + error);
        this.router.navigate(['/login']);
      },

      complete: () => {
        console.log('Se ha compleato el login');

      }

    });
}

}
