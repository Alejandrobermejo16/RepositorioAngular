import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-add-messages',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {


  //para poder utilizar el servicio en el archivo ts y en el html , lo creamos como publico
  constructor(public messagesService: MessagesService){}


  message?: string;  //indicamos que es una propiedad opcional (no necesariamente tiene que estar inicializada)

  addMessage(){
  this.messagesService.add(this.message!);
  //Este operador se utiliza para indicar al compilador de TypeScript que se tiene la certeza de que la expresión a la que se aplica no 
  //será null ni undefined.
}


}
