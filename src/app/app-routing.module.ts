import { ModuserComponent } from './views/moduser/moduser.component';
import { BuscarpeliculaComponent } from './views/buscarpelicula/buscarpelicula.component';
import { ModificapeliculaComponent } from './views/modificapelicula/modificapelicula.component';
import { RegistroComponent } from './views/registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { AniadirpeliculaComponent } from './views/aniadirpelicula/aniadirpelicula.component';
import  { NgModule }  from  '@angular/core';
import  { RouterModule, Routes }  from  '@angular/router';
import { ListadoComponent } from './views/listado/listado.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';
import { EliminarpeliculaComponent } from './views/eliminarpelicula/eliminarpelicula.component';


const  routes:  Routes  = [

  { path: 'listado', component: ListadoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent},
  { path: 'modificar/:nombre', component: ModificapeliculaComponent},
  { path: 'PaginaNoEncontradaComponent', component: PaginaNoEncontradaComponent},
  { path: 'addfilm', component: AniadirpeliculaComponent},
  { path: 'eliminar/:nombre', component: EliminarpeliculaComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'buscar/:nombre', component: BuscarpeliculaComponent},
  { path: 'modificarusuario/:nombre', component: ModuserComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export  class  AppRoutingModule  {  }
