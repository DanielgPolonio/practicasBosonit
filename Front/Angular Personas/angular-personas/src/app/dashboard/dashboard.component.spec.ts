import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personService.getPersonas()
      .subscribe(personas => this.personas = personas);
  }
}