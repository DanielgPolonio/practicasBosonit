import { Component, Input, OnInit } from '@angular/core';
import {
  Persona
} from '../../persona';
import {
  PersonService
} from '../../person.service';
import { ActivatedRoute } from '@angular/router';
import {
  Location
} from '@angular/common';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  @Input() person ? : Persona;
  personas: Persona [] = [];
  constructor(private personService: PersonService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.delete();
  }

  getPersona():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPersona(id)
      .subscribe(person => this.person = person);
  }
  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.deletePerson(id).subscribe();
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }

}
