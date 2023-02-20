import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public miToken: string | null;
  public nombreUsuario: string | null;

  constructor(private router: Router,
    private tokenService: TokenService) {
    this.miToken = 'null';
    this.nombreUsuario = '';
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth_token') != null) {
      this.miToken = sessionStorage.getItem('auth_token');
    }

    if (sessionStorage.getItem('miTokenPersonalnombre') != null) {
      this.nombreUsuario = sessionStorage.getItem('miTokenPersonalnombre');
    }

    this.tokenService.token$.subscribe(
      (data: string) => {
        this.miToken = data;
      }
    )
    this.router.navigate(['/listado']);
  }

  public logout(): void {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('miTokenPersonalnombre');

    this.miToken = 'null';
    sessionStorage.clear();
  }
}
