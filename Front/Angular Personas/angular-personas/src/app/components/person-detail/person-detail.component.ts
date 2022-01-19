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
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person ? : Persona;
  constructor(private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location) {}

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPersona(id)
      .subscribe(person => this.person = person);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.person) {
      this.personService.updatePerson(this.person)
        .subscribe(() => this.goBack());
    }
  }
}
