import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse, Usuario } from '../interfaces/auth.interfaces';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario: any;

  get usuario() {
    return { ...this._usuario}
  }

  constructor( private http: HttpClient,
    private router: Router) { }

  login( email: string, password: string) {

    const url = `${this.baseUrl}/login`;
    

    const body = { email, password }
    
    return this.http.post<AuthResponse>( url, body )
     .pipe(
       tap( resp => {
         if (resp.ok ){
           localStorage.setItem('token', resp.token);
           this._usuario = {
             nombre: resp.nombre,
             apellido: resp.apellido,
             email: resp.email,
             estado: resp.estado,
             id: resp.id,
             rol: resp.rol
           };
         }
        }),/* 
       map( res => res.ok), */
       catchError( err => of (err.error.message) )
     );
  }

  register(nombre:string, apellido:string,  email:string,  password:string ) {

    const url = `${this.baseUrl}/register`;
    const body = {nombre,apellido,email,password};

    return this.http.post<AuthResponse>(url, body) 
    .pipe(
      tap( resp => {
        if (resp.ok ){
          /* this._usuario = {
            nombre: resp.nombre,
            apellido: resp.apellido,
            id: resp.id,
            rol: resp.rol,
            unidadrevista: resp.unidadrevista
          } */
          
        }
       }),
      map( res => res.ok ),
      catchError( err => of (err.error.message) )
    );

  }
}
