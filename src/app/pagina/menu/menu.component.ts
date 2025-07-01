import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = "SteelSoft";
  isLogged = false;
  roles: string[] = [];
  email: string = "";
  seccionActiva: string = '';

  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {
 
  }

  ngOnInit() {
    // Verificar si el usuario ya está autenticado
    this.isLogged = this.tokenService.isLogged();

    if (this.isLogged) {
      this.email = this.tokenService.getEmail();
      this.roles = this.tokenService.getRole();  
    }
  }
  logout() {
    this.tokenService.logout();
  }
  
}
