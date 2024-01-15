import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from "../formulario-reactivo/formulario-reactivo.component";


@Component({
    selector: 'app-contador',
    standalone: true,
    templateUrl: './contador.component.html',
    styleUrl: './contador.component.css',
    imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule, FormularioReactivoComponent]
})
export class ContadorComponent {
[x: string]: any;

  contador = 0;
  nombre = 'Alejandro';
  
  oficio = {
    Trabajo: 'Desarrollador Web',
    Informatico: 'Front-end', 
    Actitudes: 'Esfuerzo y Constante Aprendizaje'
  };
   
  dataOficio = Object.entries(this.oficio);


  preparado = true;
  name: string = 'Juan, Valor con el que inicio la Prop name';


  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  ganasdePulsarElBoton() {
    this.contador++;

  }


  constructor( private router: Router ) { }


  goBack() {
    this.router.navigate(['/']);
    }




    
  ngOnInit() {
  }

}
