import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductoDTO {
  id: number;
  nombre: string;
  peso: number;
  descripcion_item_corrugado: string;
  id_item_corrugado: string;
  lt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  agregarProducto(producto: ProductoDTO): Observable<ProductoDTO> {
    return this.http.post<ProductoDTO>(`${this.apiUrl}`, producto);
  }

  obtenerProductos(): Observable<ProductoDTO[]> {
    return this.http.get<ProductoDTO[]>(`${this.apiUrl}`);
  }
}
