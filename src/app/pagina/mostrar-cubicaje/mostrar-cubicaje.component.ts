import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-cubicaje',
  templateUrl: './mostrar-cubicaje.component.html',
  styleUrls: ['./mostrar-cubicaje.component.css']
})
export class MostrarCubicajeComponent {
showModal: boolean = false;

 abrirModal(): void {
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
  }
}
