import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input-parent/input.config';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],

})
export class InputDateComponent implements OnInit {

  @Input() config: InputConfig;
  model: any;
  property: string;
  constructor() {}

  ngOnInit(): void {
    this.model= this.config.modelProperty.model;
    this.property= this.config.modelProperty.property;
  }

}
