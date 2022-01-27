import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Persona } from './persona';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const personas = [
      { id: 1, name: 'Daniel', city: 'Jaen', rol: 'Estudiante' },
      { id: 2, name: 'Luis', city: 'Madrid' , rol: 'Profesor' },
      { id: 3, name: 'Paloma', city: 'Madrid', rol: 'Estudiante' },
      { id: 4, name: 'Daniel del Río', city: 'Madrid', rol: 'Estudiante' },
      { id: 5, name: 'Rafa', city: 'Jaen', rol: 'Profesor' },
      { id: 6, name: 'Sergio', city: 'Jaen', rol: 'Estudiante' },
      { id: 7, name: 'Manuel', city: 'Jaen', rol: 'Profesor' },
      { id: 8, name: 'Francisco', city: 'Jaen',rol: 'Profesor' },
      { id: 9, name: 'Blanca', city: 'Los Villares', rol: 'Estudiante'},
      { id: 10, name: 'Aurora', city: 'Córdoba', rol: 'Estudiante' },
    ];
    return {personas};
  }

  genId(personas: Persona[]): number {
    return personas.length > 0 ? Math.max(...personas.map(persona => persona.id)) + 1 : 11;
  }
}