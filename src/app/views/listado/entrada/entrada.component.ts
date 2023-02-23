import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Entrada } from 'src/app/shared/interfaces/entradaInterface';
import { EntradaService } from 'src/app/shared/services/entrada.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  // Atributos
  @Input()
  public entrada: Entrada;

  @Output()
  public doEvent: EventEmitter<string>;




  public sessionReportFilter: boolean;





  constructor(private entradaService: EntradaService, private router: Router) {
    this.entrada = {
      nombre: '',
      plataforma: '',
      duracion:'',
      imagen:''
    };
    this.doEvent = new EventEmitter<string>();
this.sessionReportFilter=false;

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth_token') != null) {
      this.sessionReportFilter =true;
    }

    }



  public lanzarPelicula(): void {
    this.doEvent.emit(this.entrada.nombre);



  }


}
