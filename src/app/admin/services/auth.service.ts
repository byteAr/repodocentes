import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    return this.http.post<AuthResponse>( url, body, { withCredentials: true } )
     .pipe(
       tap( resp => {
         if (resp.ok ){
           this._usuario = {
             nombre: resp.nombre,
             apellido: resp.apellido,
             email: resp.email,
             estado: resp.estado,
             id: resp.id,
             rol: resp.rol
           };
         }
        }),
       catchError( err => of (err?.error?.message ?? 'Error de conexión con el servidor') )
     );
  }

  register(nombre: string, apellido: string, email: string, password: string) {
    const url = `${this.baseUrl}/register`;
    const body = { nombre, apellido, email, password };

    return this.http.post<AuthResponse>(url, body, { withCredentials: true })
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this._usuario = {
              nombre: resp.nombre,
              apellido: resp.apellido,
              email: resp.email,
              estado: resp.estado,
              id: resp.id,
              rol: resp.rol
            };
          }
        }),
        map(resp => resp),
        catchError(err => of({ ok: false, message: err?.error?.message ?? 'Error de conexión con el servidor' } as any))
      );
  }

  updatePassword(password:string, id: any) {
    const url = `${this.baseUrl}/updatepassword`
    const body = {password, id}
    return this.http.post<any>(url, body)
  }

  validarToken(): any {
    const url = `${this.baseUrl}/renew`;

    return this.http.get<AuthResponse>( url, { withCredentials: true } )
      .pipe(
        map( resp => {
          const { nombre, apellido, id, email, rol } = resp;
           this._usuario = { nombre, id, email, apellido, rol }
          return resp.ok;
        }),
        catchError( err => of(false))
      );
  }

  verifyEmail(token: string) {
   const url = `${this.baseUrl}/verify/${token}`
   return this.http.get<any>(url)
  }

  validateInviteToken(token: string) {
    const url = `${this.baseUrl}/users/validate-invite/${token}`;
    return this.http.get<{ ok: boolean; email?: string; message?: string }>(url);
  }

  recoveryPassword(email: string) {
    const url = `${this.baseUrl}/recovery`;
    const body = { email };
    return this.http.post<any>(url, body)
    .pipe(
      map( resp => resp )
    )
  }

  logout() {
    this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true }).subscribe();
    this._usuario = undefined;
    this.router.navigateByUrl('');
  }
}
