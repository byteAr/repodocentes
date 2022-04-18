import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }



  createDocente = (nombre: string | undefined, apellido: string | undefined, dni: number | undefined,  email: string | undefined, unidadRevista: string | undefined,) => {
    const docente = {
     nombre,
     apellido,
     dni,
     email,
     unidadRevista
    }
    return this.http.post<any>(`${this.baseUrl}/docente`, docente)
  }

  createNewUsuario = (email: string | undefined) => {
    const usuario = {     
     email     
    }
    return this.http.post<any>(`${this.baseUrl}/user`, usuario)
  }

  getDocente(id:any) {
    return this.http.get<any>(`${this.baseUrl}/docente/${id}`)
  }
  getUsuarios() {
    return this.http.get<any>(`${this.baseUrl}/users`)
  }

  getUser = () => {
    return this.http.get<any>(`${this.baseUrl}/docentes`)
  }

  deleteDocente(id: number | undefined) {    
    
    return this.http.delete<any>(`${this.baseUrl}/docente/${id}`)
  }

  deleteUsuario(id: number | undefined) {    
    
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`)
  }

  updateDocente = (id: number | undefined, nombre: string | undefined, apellido: string | undefined, dni: number | undefined,  email: string | undefined, unidadrevista: string | undefined,) => {
    const docente = {
     id,
     nombre,
     apellido,
     dni,
     email,
     unidadrevista
    }
    return this.http.put<any>(`${this.baseUrl}/docentes/${id}`, docente)
  }
}
