import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private personasUrl = 'http://localhost:8000/api/personas'; 
  private personaUrl = 'http://localhost:8000/api/persona';
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get<any>(this.personasUrl);
  }
  getPersona(id: number): Observable<any> {
    const url = `${this.personaUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updatePerson(person: Persona): Observable<any> {

    return this.http.put(this.personaUrl+"/"+person.id, person, this.httpOptions);
  }

  addPerson(person: Persona): Observable<any> {
    return this.http.post<any>(this.personaUrl, person, this.httpOptions);
  }

deletePerson(id: number): Observable<any> {
  const url = `${this.personaUrl}/${id}`;
  return this.http.delete<any>(url, this.httpOptions);
}

searchPersonas(term: string): Observable<any> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<any>(`${this.personasUrl}/?name=${term}`);
  }
}