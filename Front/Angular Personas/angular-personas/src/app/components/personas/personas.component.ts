import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { PersonService } from '../../person.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona [] = [];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

getPersonas(): void {
  this.personService.getPersonas().subscribe(personas => this.personas = personas);
}

delete(person: Persona): void {
  this.personas = this.personas.filter(h => h !== person);
  this.personService.deletePerson(person.id).subscribe();
}

}
