import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Persona
} from '../../persona';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Location
} from '@angular/common';
import {
  PersonService
} from '../../person.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
personLoaded
  @Input() person ? : Persona;
  constructor(private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location) {
      this.personLoaded = this.route.snapshot.data['person'];
      console.log(this.personLoaded);
    }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona():void{
    const id = this.personLoaded.id;
    this.personService.getPersona(id)
      .subscribe(person => {
        return this.person = person.data;
      });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.person) {
      this.personService.updatePerson(this.person)
        .subscribe()
        Swal.fire({
          title: '<strong>Usuario '+this.person.name+' editado correctamente.</strong>',
          icon: 'success',
          showCloseButton: true,
          focusConfirm: false,
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Volver',
        }).then(function(){window.location.href="localhost:4200/personas"});
    }
    this.goBack();
  }
}
