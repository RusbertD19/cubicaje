import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CajaDTO, CajaService } from '../caja.service';

@Component({
  selector: 'app-registro-caja',
  templateUrl: './registro-caja.component.html',
  styleUrls: ['./registro-caja.component.css']
})
export class RegistroCajaComponent {
  @Output() closed = new EventEmitter<void>();

  // Variables para ngModel
  unidades: number | null = null;
  pesoTotal: number | null = null;
  largo: number | null = null;
  ancho: number | null = null;
  alto: number | null = null;
  cajasxtendido: number | null = null;
  tendidosPermisibles: number | null = null;
  productoId: number = 1; // Este debería venir de un contexto real
  contenedorId: number | null = null;

  constructor(private cajaService: CajaService) {}

  cerrarModal() {
    this.closed.emit();
  }

  agregarCaja(form: NgForm) {
    if (form.invalid) {
      console.warn("Formulario inválido");
      return;
    }

    const nuevaCaja: CajaDTO = {
      productoId: this.productoId,
      unidades: this.unidades!,
      pesoTotal: this.pesoTotal!,
      largo: this.largo!,
      ancho: this.ancho!,
      alto: this.alto ?? 0,
      cajasxtendido: this.cajasxtendido!,
      tendidosPermisibles: this.tendidosPermisibles!,
      contenedorId: this.contenedorId
    };

    this.cajaService.agregarCaja(nuevaCaja).subscribe({
      next: (res) => {
        console.log('Caja guardada:', res);
        this.cerrarModal();
      },
      error: (err) => {
        console.error('Error al guardar la caja:', err);
      }
    });
  }
}
