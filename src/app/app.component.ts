import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poyecto5';
  constructor() {
    // this.router.navigate(['/home']);
    console.log('Cuidado');
    console.warn('Esto es una advertencia');
    console.log('Pruebas de conflictos');
  }
}
