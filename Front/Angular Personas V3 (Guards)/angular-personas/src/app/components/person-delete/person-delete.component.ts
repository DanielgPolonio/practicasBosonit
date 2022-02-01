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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  @Input() person ? : Persona;
  personas: Persona [] = [];
  personLoaded
  constructor(private personService: PersonService, private route: ActivatedRoute, private location: Location) {
    this.personLoaded = this.route.snapshot.data['person'];

   }

  ngOnInit(): void {
    this.delete();
  }

  getPersona():void{
    const id = this.personLoaded.id;
    this.personService.getPersona(id)
      .subscribe(person => this.person = person);
  }
  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    Swal.fire({
      title: '¿Estás seguro de querer eliminar al usuario Nº: '+id+'?',
      text: "Si confirmas, tendrás que crearlo de nuevo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, entiendo los riesgos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.personService.deletePerson(id).subscribe();
        Swal.fire(
          'Usuario Nº: '+id+' borrado satisfactoriamente.',
          '',
          'success'
        ).then(function(){window.location.href="localhost:4200/personas"});
      }
      this.goBack();
    })
  }
  goBack(): void {
    this.location.back();
  }

}
