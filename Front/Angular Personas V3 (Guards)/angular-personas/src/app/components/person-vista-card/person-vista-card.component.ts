import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { PersonService } from '../../person.service';
@Component({
  selector: 'app-person-vista-card',
  templateUrl: './person-vista-card.component.html',
  styleUrls: ['./person-vista-card.component.css']
})
export class PersonVistaCardComponent implements OnInit {
  personas: Persona [] = [];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personService.getPersonas().subscribe(personas => this.personas = personas);
  }
  

}
