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

  constructor(

    private router: Router,
    private  authservice:AuthService
){
      this.usuario={
      name:'',
      email:'',
      password:'',
      role:'',
      isActive:false
    }

  }

  ngOnInit(): void {

  }


  public registrar(email:string, password:string): void {
    this.authservice.registrar(email,password),
      (error: Error) => {
        alert("Error en el registro, el usuario ya existe");
      }

      this.router.navigate(['/listado']);

  }
}
