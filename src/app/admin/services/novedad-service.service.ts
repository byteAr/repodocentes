import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovedadServiceService {

  baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  createNewNovedad(body:FormData):Observable<any> {
    const url = `${this.baseUrl}/uploadNovedad`
    return this.http.post<any>(url, body)
  }
}
