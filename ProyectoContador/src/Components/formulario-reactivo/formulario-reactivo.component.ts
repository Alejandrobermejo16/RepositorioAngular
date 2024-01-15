import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {

 name = new FormControl ('', Validators.required);   //INICIALMENTE se le pasa una cadena vacía que será sustituida con el valor que pongamos
 correo = new FormControl ('valordeprueba@gmail.com'); //tambien podemos pasarle esto que es un valor por defecto



}
