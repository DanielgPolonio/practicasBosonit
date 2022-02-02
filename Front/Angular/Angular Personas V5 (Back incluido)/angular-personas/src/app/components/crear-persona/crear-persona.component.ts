import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { PersonService } from '../../person.service';
import { Location } from '@angular/common';
import Swal from "sweetalert2";


@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personService: PersonService, private location: Location) { }

  ngOnInit(): void {
  }
  add(name: string, city: string, rol: string): void {
    name = name.trim();
    city = city.trim();
    rol = rol.trim();
    if (rol != "Estudiante" && rol!= "Profesor"){
      rol="Estudiante";
    }
    if (!name && !city) { return; }
    this.personService.addPerson({ name, city, rol } as unknown as Persona)
      .subscribe(person => {
        this.personas.push(person);
      })
      Swal.fire({
        title: '<strong>Usuario '+name+' creado correctamente.</strong>',
        icon: 'success',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Volver',
      }).then(function(){window.location.href="localhost:4200/personas"});
  }
  goBack(): void {
    this.location.back();
  }
}
