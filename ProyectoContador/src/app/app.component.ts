import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from '../Components/contador/contador.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContadorComponent, RouterModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoContador';

  
  

}
