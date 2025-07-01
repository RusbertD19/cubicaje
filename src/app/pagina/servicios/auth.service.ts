import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:8080/api/auth';
  //private authURL = 'https://proyectodegrado-jdnc.onrender.com/api/auth';
  
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  
}
