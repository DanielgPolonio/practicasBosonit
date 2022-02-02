import {
  Component,
  Inject,
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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
    private location: Location, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Persona, public dialogRef: MatDialogRef<any>) {
      
    }

  ngOnInit(): void {
    this.dialogRef.updateSize('20%', '33%');
    this.getPersona();
  }

  getPersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPersona(id)
      .subscribe(person => this.person = person);
  }
}
