import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dummy } from '../interfaces/dummy.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Dummy[]> {
    return this.http.get<Dummy[]>(`${environment.apiUrl}/dummy`);
  }

  create(newDummyItem: Dummy): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/dummy`, newDummyItem);
  }
}
