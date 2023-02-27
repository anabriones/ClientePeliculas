import { ModuserComponent } from './views/moduser/moduser.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';
import { AniadirpeliculaComponent } from './views/aniadirpelicula/aniadirpelicula.component';
import { EliminarpeliculaComponent } from './views/eliminarpelicula/eliminarpelicula.component';
import { ModificapeliculaComponent } from './views/modificapelicula/modificapelicula.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarpeliculaComponent } from './views/buscarpelicula/buscarpelicula.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MaterialModule } from 'src/app/material-modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    PaginaNoEncontradaComponent,
    LoginComponent,
    AniadirpeliculaComponent,
    EliminarpeliculaComponent,
    RegistroComponent,
    ModificapeliculaComponent,
    BuscarpeliculaComponent,
    ModuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
