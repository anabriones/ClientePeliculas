import { RegistroComponent } from './views/registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { AniadirpeliculaComponent } from './views/aniadirpelicula/aniadirpelicula.component';
import { ModificaEntradaComponent } from './views/modifica-entrada/modifica-entrada.component';
import  { NgModule }  from  '@angular/core';
import  { RouterModule, Routes }  from  '@angular/router';
import { ListadoComponent } from './views/listado/listado.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';
import { EliminarpeliculaComponent } from './views/eliminarpelicula/eliminarpelicula.component';


const  routes:  Routes  = [

  { path: 'listado', component: ListadoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'nosotros', component: AcercaDeNosotrosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'modificar/:nombre', component: ModificaEntradaComponent},
  { path: 'PaginaNoEncontradaComponent', component: PaginaNoEncontradaComponent},
  { path: 'addfilm', component: AniadirpeliculaComponent},
  { path: 'eliminar/:nombre', component: EliminarpeliculaComponent},
  { path: 'registro', component: RegistroComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export  class  AppRoutingModule  {  }
