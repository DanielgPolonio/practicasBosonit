import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }
  get(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, this.httpOptions);
  }

  post(path: string, body:Object): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, body, this.httpOptions);
  }
}
 