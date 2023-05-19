import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigestoService {private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }


  getDigestos() {
    const url = `${this.baseUrl}/digesto`;
    return this.http.get<any>(url)
  }

  sendPost(body:FormData):Observable<any> {
    const url = `${this.baseUrl}/digesto/digesto`
    return this.http.post<any>(url, body)
  }

  getDigestoById(id:any) {
    const url = `${this.baseUrl}/digesto/${id}`
    return this.http.get<any>(url)
  }

  deleteDigesto(id: string) {
    const url = this.baseUrl;
    return this.http.delete<any>(`${url}/digesto/${id}`)
  }

}
