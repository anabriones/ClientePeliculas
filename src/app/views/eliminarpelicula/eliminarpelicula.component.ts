import { Component, Input, OnInit, Output } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { EntradaService } from 'src/app/shared/services/entrada.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-eliminarpelicula',
  templateUrl: './eliminarpelicula.component.html',
  styleUrls: ['./eliminarpelicula.component.css']
})
export class EliminarpeliculaComponent implements OnInit {
  @Input()
  public entrada: Entrada;

  constructor(
    private entradaService: EntradaService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.entrada = {
      nombre: this.rutaActiva.snapshot.params['nombre'],
      plataforma: '',
      duracion: '',
      imagen:''
    };
  }

  ngOnInit(): void {
    this.eliminarEntrada(this.entrada);
  }


  public eliminarEntrada(entrada: Entrada): any {
    this.entradaService.eliminarEntradaS(entrada).subscribe({
    next:  () => {},
   error:   (error: Error) => {
        console.log('Error: ', error);
      },
    complete:  () => {
        console.log('Petición realizada correctamente');
      }
    }
    );
    this.router.navigate(['/menu']);

   }

}
