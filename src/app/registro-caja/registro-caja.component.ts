import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registro-caja',
  templateUrl: './registro-caja.component.html',
  styleUrls: ['./registro-caja.component.css']
})
export class RegistroCajaComponent {
@Output() closed = new EventEmitter<void>();

  isAccordionOpen = false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  cerrarModal() {
    this.closed.emit();
  }
}
