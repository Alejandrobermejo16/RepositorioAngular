import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from '../Components/contador/contador.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContadorComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoContador';

  
  

}
