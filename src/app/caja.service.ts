import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CajaDTO {
  productoId: number;
  unidades: number;
  pesoTotal: number;
  largo: number;
  ancho: number;
  alto: number;
  cajasxtendido: number;
  tendidosPermisibles: number;
  contenedorId?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  private apiUrl = 'http://localhost:8080/api/cajas';

  constructor(private http: HttpClient) {}

  agregarCaja(caja: CajaDTO): Observable<CajaDTO> {
    return this.http.post<CajaDTO>(`${this.apiUrl}`, caja);
  }

  obtenerCajas(): Observable<CajaDTO[]> {
    return this.http.get<CajaDTO[]>(`${this.apiUrl}`);
  }
}
