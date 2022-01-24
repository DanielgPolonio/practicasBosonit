import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Persona } from './persona';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const personas = [
      { id: 1, name: 'Daniel', city: 'Jaen' },
      { id: 2, name: 'Luis', city: 'Madrid' },
      { id: 3, name: 'Paloma', city: 'Madrid' },
      { id: 4, name: 'Daniel del Río', city: 'Madrid' },
      { id: 5, name: 'Rafa', city: 'Jaen' },
      { id: 6, name: 'Sergio', city: 'Jaen' },
      { id: 7, name: 'Manuel', city: 'Jaen' },
      { id: 8, name: 'Francisco', city: 'Jaen' },
      { id: 9, name: 'Blanca', city: 'Los Villares' },
      { id: 10, name: 'Aurora', city: 'Córdoba' },
    ];
    return {personas};
  }

  genId(personas: Persona[]): number {
    return personas.length > 0 ? Math.max(...personas.map(persona => persona.id)) + 1 : 11;
  }
}