import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  
  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }


  traerTodosLosDocentes() {
    const url = `${this.baseUrl}/uploads`;
    return this.http.get<any>(url)
  }

  sendPost(body:FormData):Observable<any> {
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
