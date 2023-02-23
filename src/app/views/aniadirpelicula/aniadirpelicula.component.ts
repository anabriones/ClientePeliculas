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
    this.entradaService.addPelicula(this.entrada).subscribe();



    (error: Error) => {
      console.error('Error al realizar el acceso');
    };

    this.router.navigate(['/listado']);
  }
}





