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
  public email: string;
  public usuario: usuarioInterface;
  public formUSer: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.email = this.activatedRoute.snapshot.params['nombre'];

    this.usuario = {
      name: '',
      email: this.activatedRoute.snapshot.params['nombre'],
      password: '',
      role: '',
      isActive: false
    };
    this.formUSer = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', []],
      password: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(
      (paramsUrl: { [x: string]: string }) => {
        this.email = paramsUrl['nombre'];
      }
    );
  }

  ngOnInit(): void {
      this.obtenerusuario();
  }

  private obtenerusuario(): void {
    this.usuarioService.obtenerUsuario(this.email).subscribe({
      next: (data: usuarioInterface) => {
        this.usuario = data;
        this.formUSer.get('name')?.setValue(this.usuario.name);
        this.formUSer.get('email')?.setValue(this.usuario.email);
        this.formUSer.get('password')?.setValue(this.usuario.password);
      },
      error: (error: Error) => {
        console.log('Error: ', error);
        alert('Error al obtener el usuario');

      },
      complete: () => {
        console.log('Petición realizada correctamente');
      }
    });
  }

  public editarUsuario(): void {
    this.usuarioService.modificarusuario(this.formUSer.value).subscribe(
      data => {
        console.log('Usuario editado: ', data);

        this.router.navigate(['/menu']);
      },
      error => {
        console.error('Error al editar el usuario: ', error);
      }
    );
  }
}
