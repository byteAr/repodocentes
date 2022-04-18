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
  private _usuario?: Usuario;

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

  updatePassword(password:string, id: any) {
    const url = `${this.baseUrl}/updatepassword`
    const body = {password, id}
    return this.http.post<any>(url, body)    
  }

  validarToken(): any {
    const url   = `${this.baseUrl}/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {
          const { token, nombre, apellido, id, email, rol} = resp;
          localStorage.setItem('token', resp.token);
           this._usuario = {
            nombre,
            id,
            email,
            apellido,
            rol
           }
          return resp.ok;
        }),
        catchError( err => of(false))
      );
  }

  verifyEmail(token: string) {
   const url   = `${this.baseUrl}/verify/${token}`
   return this.http.get<any>(url)
  }

  recoveryPassword(email: string) {
    const url = `${this.baseUrl}/recovery`;
    const body = { email };
    return this.http.post(url, body);
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem('usuario');    
    this.router.navigateByUrl('/auth');    
  }
}
