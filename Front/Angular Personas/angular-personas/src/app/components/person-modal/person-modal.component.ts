import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  Persona
} from '../../persona';
import {
  PersonService
} from '../../person.service';
import {
  ActivatedRoute
} from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.css']
})
export class PersonModalComponent implements OnInit {
  @Input() person ? : Persona;
  personas: Persona[] = [];

  constructor(private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPersona(id)
      .subscribe(person => this.person = person);
  }
  goBack(): void {
    this.location.back();
  }
}
