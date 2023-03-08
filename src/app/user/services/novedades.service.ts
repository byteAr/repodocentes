import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }
  traerTodasLasNovedades() {
    const url = `${this.baseUrl}/novedades`;
    return this.http.get<any>(url)
  }

  traerNovedad(id: string) {
    const url = `${this.baseUrl}/novedad/${id}`;
    return this.http.get<any>(url)
  }


}
