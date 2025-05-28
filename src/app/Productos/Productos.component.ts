import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './Productos.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoComponent {
  nombre: string = 'Camisa polo';
  precio: number = 399.99;
}
