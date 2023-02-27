import { AuthService } from './../../shared/services/auth.service';
import { usuarioInterface } from './../../shared/interfaces/usuarioInterface';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.css']
})
export class ModuserComponent {

    // Atributos
    public nombre: string;
    public usuario: usuarioInterface;
    public formEntrada: FormGroup

    constructor(private activatedRoute: ActivatedRoute,
       private usuarioService: AuthService,
      private formBuilder: FormBuilder,
      private router: Router) {


        this.nombre=''
      this.usuario = {
        name: this.activatedRoute.snapshot.params['nombre'],
        email: '',
        password: '',
        role: '',
        isActive: false,
      };
      this.formEntrada = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', Validators.required]
      });

      this.activatedRoute.params.subscribe( paramsUrl => {
        this.nombre = paramsUrl['nombre'];
      });
    }

    ngOnInit(): void {

      this.obtenerusuario();
    }

    private obtenerusuario(): void {

      this.usuarioService.obtenerUsuario(this.nombre).subscribe(
        (data: usuarioInterface) => {
          this.usuario = data;

          this.formEntrada.get('nombre')?.setValue(this.usuario.name);
          this.formEntrada.get('email')?.setValue(this.usuario.email);
          this.formEntrada.get('password')?.setValue(this.usuario.password);
        }
      )
    }

    public editarUsuario(): void {

      this.usuarioService.modificarusuario(this.formEntrada.value).subscribe(
        (data) => {
          console.log("Usuario editado: ", data);

          this.router.navigate(['/Menu']);
        },
        (error) => {
          console.error("Error al editar el usuario: ", error);
        }
      )
    }

  }
