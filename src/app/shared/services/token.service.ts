import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // Atributos
  private token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Observables
  public token$: Observable<string> = this.token.asObservable();

  // Setters
  public setToken(token: string): void {

    this.token.next(token);
  }
}
