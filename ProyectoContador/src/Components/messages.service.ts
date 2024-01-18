import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  //la idea con el servicio es crear una lista de tareas
  constructor() { } 

   messages: string[] = ["banana","gatos","Diseñador web"]; //array de strings vacio

   //metodo para añadir al array de mensajes un nuevo mensaje
   add(message: string){
    this.messages.push(message);
   }
  


}
