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
  private personasUrl = 'http://localhost:8080/personas'; 
  private personaUrl = 'http://localhost:8080/persona';
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl);
  }
  getPersona(id: number): Observable<Persona> {
    const url = `${this.personaUrl}/${id}`;
    return this.http.get<Persona>(url);
  }

  updatePerson(person: Persona): Observable<any> {

    return this.http.put(this.personaUrl+"/"+person.id, person, this.httpOptions);
  }

  addPerson(person: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.personaUrl, person, this.httpOptions);
  }

deletePerson(id: number): Observable<Persona> {
  const url = `${this.personaUrl}/${id}`;
  return this.http.delete<Persona>(url, this.httpOptions);
}

searchPersonas(term: string): Observable<Persona[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Persona[]>(`${this.personasUrl}/?name=${term}`);
  }
}