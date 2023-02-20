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
      plataforma: ''
    };
  }

  ngOnInit(): void {
    this.eliminarEntrada(this.entrada);
  }


  public eliminarEntrada(entrada: Entrada): any {

    this.entradaService.eliminarEntradaS(entrada).subscribe();
    this.router.navigate(['/listado']);

   // window.location.reload(); //recargo la página para comprobar que se ha eliminado la película
  }

}
