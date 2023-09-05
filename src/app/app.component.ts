import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // animaciones para el cambio de pagina 
  trigger('zoomInOut', [
    state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
    transition(':enter', [animate(300)]),
    transition(':leave', [animate(300)]), // Animación de salida
  ])
]
})
export class AppComponent {
  title = 'neptune';
}
