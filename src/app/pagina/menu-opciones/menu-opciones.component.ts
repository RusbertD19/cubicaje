import { Component, HostListener, Input } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent {
  @Input() roles: string[] = [];
  isOpen = false;
  seccionActiva = '';
subMenu: string | null = null;

    constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {}
  
  seleccionarSeccion(event: any) {
    const seccionSeleccionada = event.target.value;
    if (seccionSeleccionada) {
      this.cambiarSeccion(seccionSeleccionada);
    }
  }
  
  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
    this.router.navigateByUrl('/' + seccion); // Navegar a la ruta correspondiente
  }

  logout() {
    this.tokenService.logout();
  }
  abrirMenu() {
    this.isOpen = true;
  }

  cerrarMenu() {
    this.isOpen = false;
  }

toggleSubMenu(menu: string) {
  this.subMenu = this.subMenu === menu ? null : menu;
}

seleccionarSeccionManual(seccion: string) {
  this.seleccionarSeccion({ target: { value: seccion } });
  this.cerrarMenu();
}
}