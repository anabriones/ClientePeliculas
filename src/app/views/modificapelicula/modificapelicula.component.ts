import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { EntradaService } from 'src/app/shared/services/entrada.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-modificapelicula',
  templateUrl: './modificapelicula.component.html',
  styleUrls: ['./modificapelicula.component.css']
})

export class ModificapeliculaComponent implements OnInit {

  // Atributos
  public nombre: string;
  public entrada: Entrada;
  public formEntrada: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private entradaService: EntradaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.nombre = this.activatedRoute.snapshot.params['nombre'];
    this.entrada = {
      nombre: this.activatedRoute.snapshot.params['nombre'],
      plataforma: '',
      duracion: '',
      imagen: ''
    };
    this.formEntrada = this.formBuilder.group({
      nombre: [this.entrada.nombre, [Validators.required]],
      plataforma: ['', [Validators.required, Validators.minLength(3)]],
      duracion: ['', Validators.required],
      imagen: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe((paramsUrl: { [x: string]: string; }) => {
      this.nombre = paramsUrl['nombre'];
    });
  }

  ngOnInit(): void {
    this.recuperarPelicula(this.nombre);
  }

  private recuperarPelicula(nombre: string): void {
    this.entradaService.recuperarEntrada(nombre).subscribe({
   next:   (entrada:Entrada) => {
      this.entrada = entrada;
      this.formEntrada.get('plataforma')?.setValue(this.entrada.plataforma);
      this.formEntrada.get('duracion')?.setValue(this.entrada.duracion);
      this.formEntrada.get('imagen')?.setValue(this.entrada.imagen);
    },

  error: (error: Error) => {
    console.log('Error: ', error);
    alert('Error al modificar  pelicula');
    this.router.navigate(['/menu']);
  },
  complete: () => {
    console.log('Petición realizada correctamente');
  }
});
  }

  public editarEntrada(): void {
    this.entradaService.modificarEntradaS(this.formEntrada.value).subscribe({
    next:  () => {
        console.log('Entrada editada: ');

        this.router.navigate(['/menu']);
      },
   error:   error => {
        console.error('Error al editar la entrada: ', error);
      }
    }
    );
  }


}
