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
     private authservice: AuthService) {
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
    this.authservice.login(email, password),
      (error: Error) => {
        alert('Error al realizar el acceso'+ error);
      };
  }
}
