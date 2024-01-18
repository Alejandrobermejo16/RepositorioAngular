import { Routes } from "@angular/router";
import { ContadorComponent } from "../Components/contador/contador.component";
import { PaginadorComponent } from "../Components/paginador/paginador.component";
import { FormularioReactivoComponent } from "../Components/formulario-reactivo/formulario-reactivo.component";
import { AddMessagesComponent } from "../Components/add-messages/add-messages.component";

export const routes: Routes = [

  { path: 'contador', component: ContadorComponent },
  { path: 'paginador', component: PaginadorComponent },
  { path: 'formulario', component: FormularioReactivoComponent },
  { path: 'message', component: AddMessagesComponent },

  

];