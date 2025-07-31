import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent {
@Output() closed = new EventEmitter<void>();

  isAccordionOpen = false;
  isAccordionCajaOpen=false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
   toggleAccordionCaja() {
    this.isAccordionCajaOpen = !this.isAccordionCajaOpen;
  }
  cerrarModal() {
    this.closed.emit();
  }
}
