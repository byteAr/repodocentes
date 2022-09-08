import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  traerTodasLasNovedades() {
    const url = `${this.baseUrl}/novedades`;
    return this.http.get<any>(url)
  }

  sendNovedad(body:FormData):Observable<any> {
    const url = `${this.baseUrl}/upload`
    return this.http.post<any>(url, body)
  }

  getDocumentsById(id:any) {
    const url = `${this.baseUrl}/documents/${id}`
    return this.http.get<any>(url)
  }

  deleteDocument(id: string) {
    const url = this.baseUrl;
    return this.http.delete<any>(`${url}/upload/${id}`)
  }
}
