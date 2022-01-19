import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }
  add(name: string, city: string): void {
    name = name.trim();
    city = city.trim();
    if (!name && !city) { return; }
    this.personService.addPerson({ name, city } as Persona)
      .subscribe(person => {
        this.personas.push(person);
      });
  }
}
