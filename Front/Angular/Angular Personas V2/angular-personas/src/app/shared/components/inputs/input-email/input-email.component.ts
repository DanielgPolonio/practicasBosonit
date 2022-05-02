import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input-parent/input.config';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {

  @Input() config: InputConfig;
  model: any;
  property: string;

  constructor() { }

    ngOnInit(): void {
      this.model= this.config.modelProperty.model;
      this.property= this.config.modelProperty.property;
    }

}
