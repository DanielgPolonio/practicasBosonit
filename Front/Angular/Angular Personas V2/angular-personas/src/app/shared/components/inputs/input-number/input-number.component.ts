import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input-parent/input.config';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],

})
export class InputNumberComponent implements OnInit {
  @Input() config:InputConfig;
  model: any;
  property: string;

  constructor() { }

  ngOnInit(): void {
    this.model= this.config.modelProperty.model;
    this.property= this.config.modelProperty.property;
  }

}
