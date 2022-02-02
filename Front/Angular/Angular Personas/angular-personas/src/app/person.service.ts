import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private personasUrl = 'api/personas'; 
  constructor(  private http: HttpClient, private messageService: MessageService) { }


  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }


  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl).pipe(
      tap(_ => this.log('fetched people')),
      catchError(this.handleError<Persona[]>('getPersonas', []))
    );
  }
  getPersona(id: number): Observable<Persona> {
    const url = `${this.personasUrl}/${id}`;
    return this.http.get<Persona>(url).pipe(
      tap(_ => this.log(`fetched person id=${id}`)),
      catchError(this.handleError<Persona>(`getPerson id=${id}`))
    );
  }

  updatePerson(person: Persona): Observable<any> {
    return this.http.put(this.personasUrl, person, this.httpOptions).pipe(
      tap(_ => this.log(`updated person id=${person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  addPerson(person: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.personasUrl, person, this.httpOptions).pipe(
      tap((newPerson: Persona) => this.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<Persona>('addPerson'))
    );
  }

/** DELETE: delete the person from the server */
deletePerson(id: number): Observable<Persona> {
  const url = `${this.personasUrl}/${id}`;

  return this.http.delete<Persona>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted person id=${id}`)),
    catchError(this.handleError<Persona>('deletePerson'))
  );
}

searchPersonas(term: string): Observable<Persona[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Persona[]>(`${this.personasUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`Resultados con el nombre "${term}"`) :
       this.log(`no hay resultados con el nombre "${term}"`)),
    catchError(this.handleError<Persona[]>('searchPersonas', []))
  );
}
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}