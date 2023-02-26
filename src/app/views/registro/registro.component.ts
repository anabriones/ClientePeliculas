import { AuthService } from './../../shared/services/auth.service';
import { Usuario } from 'src/app/shared/classes/usuario';
import { tokenInterface } from './../../shared/interfaces/tokenInterface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public usuario: Usuario;

  constructor(private router: Router, private authservice: AuthService) {
    this.usuario = {
      name: '',
      email: '',
      password: '',
      role: 'user',
      isActive: false
    };
  }

  ngOnInit(): void {}

  public registrar(name: string, email: string, password: string): void {
    this.usuario.name = name;
    this.usuario.email = email;
    this.usuario.password = password;
    this.authservice.registrar(this.usuario).subscribe({
      next: () => {},
      error: (error: Error) => {
        console.log('Error: ', error);
        alert('Error al registrar el usuario, ya existe');
        this.router.navigate(['/registro']);
      },
      complete: () => {
        console.log('Petición realizada correctamente');
        this.router.navigate(['/menu']);
      }
    });
  }
}
