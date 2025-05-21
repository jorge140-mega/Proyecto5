import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poyecto5';

  constructor() {
    console.log('Funciones de prueba');
    console.warn('Advertencia de prueba');
    console.log('Prueba de conflictos');

  }
}
