import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input-parent/input.config';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit {
  @Input() config:InputConfig;
  model: any;
  property: string;

  constructor() { }

  ngOnInit(): void {
    this.model= this.config.modelProperty.model;
    this.property= this.config.modelProperty.property;
  }

}
