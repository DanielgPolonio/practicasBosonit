import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { PersonService } from '../../person.service';
import { MatDialog } from '@angular/material/dialog';
import { PersonModalComponent } from '../person-modal/person-modal.component';

@Component({
  selector: 'app-person-vista-card',
  templateUrl: './person-vista-card.component.html',
  styleUrls: ['./person-vista-card.component.css']
})
export class PersonVistaCardComponent implements OnInit {
  personas: Persona [] = [];
  constructor(private personService: PersonService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personService.getPersonas().subscribe(personas => this.personas = personas);
  }

}
