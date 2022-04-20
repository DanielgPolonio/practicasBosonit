import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-dummy',
  templateUrl: './form-dummy.component.html',
  styleUrls: ['./form-dummy.component.scss'],
})
export class FormDummyComponent implements OnInit {
  @Input() okButton = 'Ok';
  @Input() cancelButton = 'Cancel';
  @Output() receiveSubmit: EventEmitter<any> = new EventEmitter<any>();
  dummyForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.dummyForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      active: [true],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.receiveSubmit.emit(this.dummyForm.value);
  }
}
