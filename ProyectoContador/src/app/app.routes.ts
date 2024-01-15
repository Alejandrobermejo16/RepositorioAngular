import { Routes } from "@angular/router";
import { ContadorComponent } from "../Components/contador/contador.component";
import { PaginadorComponent } from "../Components/paginador/paginador.component";

export const routes: Routes = [

  { path: 'contador', component: ContadorComponent },
  { path: 'paginador', component: PaginadorComponent },

  

];