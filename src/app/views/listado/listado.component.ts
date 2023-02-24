import { EntradaService } from './../../shared/services/entrada.service';
import { Entrada } from '../../shared/interfaces/entradaInterface';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoEntradas: Entrada[];
  public busqueda : string | null;

  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [];
    this.busqueda='';
  }

  ngOnInit(): void {
    this.listarEntradas();

  }




  public listarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe({
     next: (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;

      },
   error: (error: Error) => {
        console.log('Error: ', error);
      },
   complete:   () => {
        console.log('Petición realizada correctamente');
      }
    }
    );

  }

  public mostrarPelicula(nombre: string): void {
    alert(`Pelicula Seleccionada: ${ nombre }.`);
  }

}
