import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-aniadirpelicula',
  templateUrl: './aniadirpelicula.component.html',
  styleUrls: ['./aniadirpelicula.component.css']
})
export class AniadirpeliculaComponent implements OnInit {
  // Atributos
  @Input()
  public entrada: Entrada;

  constructor(
    private entradaService: EntradaService,
    private router: Router
  ) {
    this.entrada = {
     nombre: '',
     plataforma: '',
     duracion:'',
     imagen:''
    };
  }

  ngOnInit(): void {}



  public submit(nombre: string, plataforma: string): void {
    this.entrada.nombre = nombre;
    this.entrada.plataforma = plataforma;
    this.entradaService.addPelicula(this.entrada).subscribe({
      next:  () => {},
     error:   (error: Error) => {
          console.log('Error: ', error);
          alert('Error al añadir pelicula, mire si ya existe la película')
        },
      complete:  () => {
          console.log('Petición realizada correctamente');
        }
      });
    this.router.navigate(['/listado']);
  }
}





