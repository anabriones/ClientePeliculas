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
    public formUSer: FormGroup

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
      this.formUSer = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', Validators.required]
      });

      this.activatedRoute.params.subscribe( (paramsUrl: { [x: string]: string; })  => {
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

          this.formUSer.get('nombre')?.setValue(this.usuario.name);
          this.formUSer.get('email')?.setValue(this.usuario.email);
          this.formUSer.get('password')?.setValue(this.usuario.password);
        }
      )
    }

    public editarUsuario(): void {

      this.usuarioService.modificarusuario(this.formUSer.value).subscribe(
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
