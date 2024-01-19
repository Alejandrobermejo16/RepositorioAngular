import { Component, inject } from '@angular/core'; //importamos inject
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs'; //importamos obervables
import { Store } from '@ngrx/store'; //importamos el store
import { increment, reset, decrement } from './counter.actions';  //importamos las acciones

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private store = inject(Store);  //inyectamos el store
   
  count$?: Observable<number>;   //ponemos la prop count como un obervable de acciones

   constructor(){
    this.count$ = this.store.select('counter');  //la prop count toma el estado actual de counter, la prop que viene del reducer
   }

   increment() {
    this.store.dispatch((increment()));  //despachamos el tipo de accion que hemos importado
   }

  decrement(){
    this.store.dispatch((decrement()));
  }

  reset(){
    this.store.dispatch((reset()));
  }

}
