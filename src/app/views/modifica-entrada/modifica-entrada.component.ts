import { Component, Input, OnInit, Output } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { EntradaService } from 'src/app/shared/services/entrada.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-modifica-entrada',
  templateUrl: './modifica-entrada.component.html',
  styleUrls: ['./modifica-entrada.component.css']
})
export class ModificaEntradaComponent implements OnInit {
  // Atributos
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

  ngOnInit(): void {}

  public submit(nombre: string, plataforma: string): void {
    this.entrada.plataforma = plataforma;
    this.entradaService.modificarEntradaS(this.entrada).subscribe();


    (error: Error) => {
      console.error('Error al realizar el acceso');
    };

    this.router.navigate(['/listado']);

  }
}
