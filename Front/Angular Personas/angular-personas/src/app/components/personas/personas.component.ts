import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { PersonService } from '../../person.service';
import {MatDialog} from '@angular/material/dialog';
import { PersonModalComponent } from '../person-modal/person-modal.component';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona [] = [];
  constructor(private personService: PersonService, private dialog: MatDialog) { }

  openDialog(person: Persona) {
    const dialogRef = this.dialog.open(PersonModalComponent,{
      data: {id: person.id, name: person.name, city: person.city},
      width:'300px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
