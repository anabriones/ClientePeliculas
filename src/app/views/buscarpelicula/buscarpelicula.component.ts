import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { EntradaService } from 'src/app/shared/services/entrada.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscarpelicula',
  templateUrl: './buscarpelicula.component.html',
  styleUrls: ['./buscarpelicula.component.css']
})
export class BuscarpeliculaComponent {
  // Atributos
  @Input()
  public entrada: Entrada;

  public nombre: string;

  constructor(private entradaService: EntradaService,
     private router: Router,
     private activatedRoute: ActivatedRoute,) {
    this.entrada = {
      nombre: '',
      plataforma: '',
      duracion: '',
      imagen: ''
    };

    this.nombre = this.activatedRoute.snapshot.params['nombre'];
  }

  ngOnInit(): void {
    this.obtenerpelicula(this.nombre);
    this.router.navigate(['/buscar/nombre']);
  }

  public obtenerpelicula(nombre: string): void {
    this.entradaService.recuperarEntrada(nombre).subscribe({
      next: (entrada: Entrada) => {
        this.entrada = entrada;
      },
      error: (error: Error) => {
        console.log('Error: ', error);
        alert('Error al añadir pelicula, mire si ya existe la película');
      },
      complete: () => {
        console.log('Petición realizada correctamente');
      }
    });
    this.router.navigate(['/listado']);
  }
}
